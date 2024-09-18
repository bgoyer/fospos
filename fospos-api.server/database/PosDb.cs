using FosposApi.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace FosposApi.Server.Database
{
    public class PosDb : DbContext
    {
        public PosDb(DbContextOptions<PosDb> options)
            : base(options) { }

        public DbSet<Category> Categories => Set<Category>();
        public DbSet<ItemOption> ItemOptions => Set<ItemOption>();
        public DbSet<MenuItem> MenuItems => Set<MenuItem>();
        public DbSet<OrderItem> OrderItems => Set<OrderItem>();
        public DbSet<Order> Orders => Set<Order>();
        public DbSet<Subcategory> Subcategories => Set<Subcategory>();
        public DbSet<TimeSheet> Timesheets => Set<TimeSheet>();
        public DbSet<UserLog> UserLogs => Set<UserLog>();
        public DbSet<User> Users => Set<User>();
    }
}