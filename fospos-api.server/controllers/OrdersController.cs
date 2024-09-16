using Microsoft.EntityFrameworkCore;

public static class OrdersController {
    public static void Configure(WebApplication webapp) {
        var orders = webapp.MapGroup("/orders");
        orders.MapGet("/", GetAllOrders);
        orders.MapGet("/open", GetOpenOrders);
        orders.MapGet("/{id}", GetOrder);
        orders.MapPost("/", CreateOrder);
        orders.MapPut("/{id}", UpdateOrder);
        orders.MapDelete("/{id}", DeleteOrder);
    }

    static async Task<IResult> GetAllOrders(PosDb db)
    {
        return TypedResults.Ok(await db.Orders.ToArrayAsync());
    }

    static async Task<IResult> GetOpenOrders(PosDb db)
    {
        return TypedResults.Ok(await db.Orders.Where(t => t.IsComplete == false).ToListAsync());
    }

    static async Task<IResult> GetOrder(int id, PosDb db)
    {
        return await db.Orders.FindAsync(id)
            is Order order
                ? TypedResults.Ok(order)
                : TypedResults.NotFound();
    }

    static async Task<IResult> CreateOrder(Order order, PosDb db)
    {
        db.Orders.Add(order);
        await db.SaveChangesAsync();

        return TypedResults.Created($"/orders/{order.Id}", order);
    }

    static async Task<IResult> UpdateOrder(int id, Order inputOrder, PosDb db)
    {
        var order = await db.Orders.FindAsync(id);

        if (order is null) return TypedResults.NotFound();

        order.Name = inputOrder.Name;
        order.IsComplete = inputOrder.IsComplete;

        await db.SaveChangesAsync();

        return TypedResults.NoContent();
    }

    static async Task<IResult> DeleteOrder(int id, PosDb db)
    {
        if (await db.Orders.FindAsync(id) is Order order)
        {
            

            db.Orders.Remove(order);
            await db.SaveChangesAsync();
            return TypedResults.NoContent();
        }

        return TypedResults.NotFound();
    }
}

