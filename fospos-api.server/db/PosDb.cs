using Microsoft.EntityFrameworkCore;

public class PosDb : DbContext
{
    public PosDb(DbContextOptions<PosDb> options)
        : base(options) { }

    public DbSet<ItemDetail> ItemDetails => Set<ItemDetail>();
    public DbSet<ItemOption> ItemOptions => Set<ItemOption>();
    public DbSet<OrderItem> OrderItems => Set<OrderItem>();
    public DbSet<Order> Orders => Set<Order>();
    public DbSet<TimeSheet> Timesheets => Set<TimeSheet>();
    public DbSet<UserLog> UserLogs => Set<UserLog>();
    public DbSet<User> Users => Set<User>();
}