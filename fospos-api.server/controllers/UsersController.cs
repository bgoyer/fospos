using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

public static class UsersController
{
    public static void Configure(WebApplication webapp) {
        var users = webapp.MapGroup("/users");
        users.MapGet("/{userId}", GetUser);
        users.MapGet("/{userId}/timesheets", GetUserTimesheets);
        users.MapPost("/{userId}/timesheets", PostUserTimesheet);
    }

    static async Task<IResult> GetUser(PosDb db, int userId)
    {
        var user = await db.Users.FindAsync(userId);
        return TypedResults.Ok(user);
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