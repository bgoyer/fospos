using Microsoft.EntityFrameworkCore;
using FosposApi.Server.Models;

namespace FosposApi.Server.Database
{
    public class PosDbContext : DbContext
    {
        public PosDbContext(DbContextOptions<PosDbContext> options) : base(options) { }

        // DbSet properties for each table
        public DbSet<User> Users { get; set; }
        public DbSet<TimeSheet> TimeSheets { get; set; }
        public DbSet<UserLog> UserLogs { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Subcategory> Subcategories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Sale> Sales { get; set; }
        public DbSet<SaleItem> SaleItems { get; set; }
        public DbSet<Option> Options { get; set; }
        public DbSet<SaleItemOption> SaleItemOptions { get; set; }
        public DbSet<Role> Roles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure relationships and constraints

            modelBuilder.Entity<User>()
                .HasOne<Role>()
                .WithMany()
                .HasForeignKey(u => u.RoleID);

            modelBuilder.Entity<Subcategory>()
                .HasOne<Category>()
                .WithMany()
                .HasForeignKey(sub => sub.CategoryID);

            modelBuilder.Entity<Product>()
                .HasOne<Subcategory>()
                .WithMany()
                .HasForeignKey(prod => prod.SubcategoryID);

            modelBuilder.Entity<Sale>()
                .HasOne<Customer>()
                .WithMany()
                .HasForeignKey(sale => sale.CustomerID);

            modelBuilder.Entity<SaleItem>()
                .HasOne<Sale>()
                .WithMany()
                .HasForeignKey(item => item.SaleID);

            modelBuilder.Entity<SaleItem>()
                .HasOne<Product>()
                .WithMany()
                .HasForeignKey(item => item.ProductID);

            modelBuilder.Entity<SaleItemOption>()
                .HasOne<SaleItem>()
                .WithMany()
                .HasForeignKey(opt => opt.SaleItemID);

            modelBuilder.Entity<SaleItemOption>()
                .HasOne<Option>()
                .WithMany()
                .HasForeignKey(opt => opt.OptionID);

            modelBuilder.Entity<TimeSheet>()
                .HasOne<User>()
                .WithMany()
                .HasForeignKey(ts => ts.UserID);

            modelBuilder.Entity<UserLog>()
                .HasOne<User>()
                .WithMany()
                .HasForeignKey(log => log.UserID);

            base.OnModelCreating(modelBuilder);
        }
    }
}