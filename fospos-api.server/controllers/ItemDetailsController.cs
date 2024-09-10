using Microsoft.EntityFrameworkCore;

public static class ItemDetailsController
{
    public static void Configure(WebApplication webapp) {
        var itemDetails = webapp.MapGroup("/item-details");
        itemDetails.MapGet("/", GetAllItemDetails);
        itemDetails.MapGet("/{id}", GetItemDetail);
        itemDetails.MapPost("/", CreateItemDetail);
        itemDetails.MapPut("/{id}", UpdateItemDetail);
        itemDetails.MapDelete("/{id}", DeleteItemDetail);
    }

    static async Task<IResult> GetAllItemDetails(PosDb db)
    {
        return TypedResults.Ok(await db.ItemDetails.ToArrayAsync());
    }

    static async Task<IResult> GetItemDetail(int id, PosDb db)
    {
        return await db.ItemDetails.FindAsync(id)
            is ItemDetail detail
                ? TypedResults.Ok(detail)
                : TypedResults.NotFound();
    }

    static async Task<IResult> CreateItemDetail(ItemDetail detail, PosDb db)
    {
        db.ItemDetails.Add(detail);
        await db.SaveChangesAsync();

        return TypedResults.Created($"/item-details/{detail.Id}", detail);
    }

    static async Task<IResult> UpdateItemDetail(int id, ItemDetail inputDetail, PosDb db)
    {
        var detail = await db.ItemDetails.FindAsync(id);

        if (detail is null) return TypedResults.NotFound();

        detail.Name = inputDetail.Name;

        await db.SaveChangesAsync();

        return TypedResults.NoContent();
    }

    static async Task<IResult> DeleteItemDetail(int id, PosDb db)
    {
        if (await db.ItemDetails.FindAsync(id) is ItemDetail detail)
        {
            db.ItemDetails.Remove(detail);
            await db.SaveChangesAsync();
            return TypedResults.NoContent();
        }

        return TypedResults.NotFound();
    }
}

