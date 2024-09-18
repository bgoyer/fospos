using FosposApi.Server.Database;
using FosposApi.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace FosposApi.Server.Controllers
{
    public static class ItemsController
    {
        public static void Configure(WebApplication webapp)
        {
            var itemDetails = webapp.MapGroup("/menu-items");
            itemDetails.MapGet("/", GetAllItems);
            itemDetails.MapGet("/{id}", GetItem);
            itemDetails.MapPut("/", CreateItem);
            itemDetails.MapPost("/{id}", UpdateItem);
            itemDetails.MapDelete("/{id}", DeleteItem);
        }

        static async Task<IResult> GetAllItems(PosDb db)
        {
            return TypedResults.Ok(await db.MenuItems.ToArrayAsync());
        }

        static async Task<IResult> GetItem(int id, PosDb db)
        {
            return await db.MenuItems.FindAsync(id)
                is MenuItem detail
                    ? TypedResults.Ok(detail)
                    : TypedResults.NotFound();
        }

        static async Task<IResult> CreateItem(MenuItem detail, PosDb db)
        {
            db.MenuItems.Add(detail);
            await db.SaveChangesAsync();

            return TypedResults.Created($"/items/{detail.Id}", detail);
        }

        static async Task<IResult> UpdateItem(int id, MenuItem inputItem, PosDb db)
        {
            var item = await db.MenuItems.FindAsync(id);

            if (item is null) return TypedResults.NotFound();

            item.Name = inputItem.Name;

            await db.SaveChangesAsync();

            return TypedResults.NoContent();
        }

        static async Task<IResult> DeleteItem(int id, PosDb db)
        {
            if (await db.MenuItems.FindAsync(id) is MenuItem detail)
            {
                db.MenuItems.Remove(detail);
                await db.SaveChangesAsync();
                return TypedResults.NoContent();
            }

            return TypedResults.NotFound();
        }
    }
}