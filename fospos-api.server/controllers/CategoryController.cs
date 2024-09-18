using FosposApi.Server.Database;
using FosposApi.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace FosposApi.Server.Controllers
{
    public static class SubcategoryController
    {
        public static void Configure(WebApplication webapp)
        {
            var users = webapp.MapGroup("/subcategories");
            users.MapGet("/", GetAllCategories);
            users.MapGet("/{id}", GetCategory);
            users.MapPut("/", CreateCategory);
        }

        static async Task<IResult> GetAllCategories(PosDb db)
        { 
            return TypedResults.Ok(await db.Subcategories.ToArrayAsync());
        }
        static async Task<IResult> GetCategory(PosDb db, int id)
        {
            var subcategory = await db.Subcategories.FindAsync(id);
            return TypedResults.Ok(subcategory);
        }
        static async Task<IResult> CreateCategory(Subcategory subcategory, PosDb db) 
        {
            db.Subcategories.Add(subcategory);
            await db.SaveChangesAsync();
            
            return TypedResults.Created($"/subcategories/{subcategory.Id}", subcategory);
        }
    }
}