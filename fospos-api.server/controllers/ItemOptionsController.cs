using FosposApi.Server.Database;
using FosposApi.Server.Models;
using Microsoft.EntityFrameworkCore;


namespace FosposApi.Server.Controllers
{
    public static class ItemOptionsController
    {
        public static void Configure(WebApplication webapp)
        {
            var itemOptions = webapp.MapGroup("/item-options");
            itemOptions.MapGet("/", GetAllItemOptions);
            itemOptions.MapGet("/{id}", GetItemOption);
            itemOptions.MapPut("/", CreateItemOption);
            itemOptions.MapPost("/{id}", UpdateItemOption);
            itemOptions.MapDelete("/{id}", DeleteItemOption);
        }

        static async Task<IResult> GetAllItemOptions(PosDb db)
        {
            return TypedResults.Ok(await db.ItemOptions.ToArrayAsync());
        }

        static async Task<IResult> GetItemOption(int id, PosDb db)
        {
            return await db.ItemOptions.FindAsync(id)
                is ItemOption option
                    ? TypedResults.Ok(option)
                    : TypedResults.NotFound();
        }

        static async Task<IResult> CreateItemOption(MenuItem option, PosDb db)
        {
            db.MenuItems.Add(option);
            await db.SaveChangesAsync();

            return TypedResults.Created($"/item-options/{option.Id}", option);
        }

        static async Task<IResult> UpdateItemOption(int id, ItemOption inputOption, PosDb db)
        {
            var option = await db.ItemOptions.FindAsync(id);

            if (option is null) return TypedResults.NotFound();

            option.Name = inputOption.Name;

            await db.SaveChangesAsync();

            return TypedResults.NoContent();
        }

        static async Task<IResult> DeleteItemOption(int id, PosDb db)
        {
            if (await db.ItemOptions.FindAsync(id) is ItemOption option)
            {
                db.ItemOptions.Remove(option);
                await db.SaveChangesAsync();
                return TypedResults.NoContent();
            }

            return TypedResults.NotFound();
        }
    }
}