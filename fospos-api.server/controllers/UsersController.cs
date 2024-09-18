using FosposApi.Server.Database;
using FosposApi.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FosposApi.Server.Controllers
{
    public static class UsersController
    {
        public static void Configure(WebApplication webapp)
        {
            var users = webapp.MapGroup("/users");
            users.MapGet("/", GetAllUsers);
            users.MapGet("/{userId}", GetUser);
            users.MapGet("/{userId}/timesheets", GetUserTimesheets);
            users.MapPost("/{userId}/timesheets", PostUserTimesheet);
            users.MapPut("/", CreateUser);
        }

        static async Task<IResult> GetAllUsers(PosDb db)
        {
            return TypedResults.Ok(await db.Users.ToArrayAsync());
        }
        static async Task<IResult> GetUser(PosDb db, int userId)
        {
            var user = await db.Users.FindAsync(userId);
            return TypedResults.Ok(user);
        }
        static async Task<IResult> CreateUser(User user, PosDb db) //TODO: Remove this when the main db is up unless the server GUI needs this
        {
            db.Users.Add(user);
            await db.SaveChangesAsync();

            return TypedResults.Created($"/users/{user.Id}", user);
        }
        static async Task<IResult> GetUserTimesheets(PosDb db, int userId)
        {
            var sheets = await db.Timesheets.Where(sheet => sheet.UserId == userId).ToListAsync();
            return TypedResults.Ok(sheets);
        }

        static async Task<IResult> PostUserTimesheet(PosDb db, int userId, [FromBody] TimeSheet sheet)
        {
            sheet.UserId = userId;
            var updated = await db.Timesheets.AddAsync(sheet);
            return TypedResults.Ok(updated);
        }
    }
}