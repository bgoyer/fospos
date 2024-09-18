using FosposApi.Server.Database;
using FosposApi.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace FosposApi.Server.Controllers
{
    public static class CategoryController
    {
        public static void Configure(WebApplication webapp)
        {
            var users = webapp.MapGroup("/categories");
            users.MapGet("/", GetAllCategories);
            users.MapGet("/{id}", GetCategory);
            users.MapPut("/", CreateCategory);
        }

        static async Task<IResult> GetAllCategories(PosDb db)
        {
            var categories = await db.Categories.ToListAsync();
            return TypedResults.Ok(categories);
        }
        static async Task<IResult> GetCategory(PosDb db, int id)
        {
            var category = await db.Categories.FindAsync(id);
            return TypedResults.Ok(category);
        }
        static async Task<IResult> CreateCategory(Category category, PosDb db) 
        {
            db.Categories.Add(category);
            await db.SaveChangesAsync();

            return TypedResults.Created($"/category/{category.Id}", category);
        }
    }
}