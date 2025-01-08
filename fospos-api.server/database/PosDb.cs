using Microsoft.EntityFrameworkCore;
using FosposApi.Server.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace FosposApi.Server.Database
{
    public class PosDbContext : DbContext
    {
        public PosDbContext(DbContextOptions<PosDbContext> options) : base(options) { }

        // DbSet properties for each table
        public DbSet<Cart> Carts { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<CartItemOption> CartItemOptions { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductOption> ProductOptions { get; set; }
        public DbSet<SubCategory> SubCategories { get; set; }
        public DbSet<TimeSheet> TimeSheets { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<UserLog> UserLogs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure relationships and constraints
            modelBuilder.Entity<Cart>()
                .HasOne<Customer>()
                .WithMany()
                .HasForeignKey(cart => cart.CustomerID);

            modelBuilder.Entity<CartItem>()
                .HasOne<Cart>()
                .WithMany()
                .HasForeignKey(cartItem => cartItem.CartID);
            
            modelBuilder.Entity<CartItemOption>()
                .HasOne<CartItem>()
                .WithMany()
                .HasForeignKey(cartItemOption => cartItemOption.CartItemID);
            
            modelBuilder.Entity<Category>()
                .HasMany<SubCategory>()
                .WithOne()
                .HasForeignKey(subCategory => subCategory.CategoryID);

            modelBuilder.Entity<Payment>()
                .HasOne<Cart>()
                .WithMany()
                .HasForeignKey(payment => payment.CartID);

            modelBuilder.Entity<Product>()  
                .HasOne<SubCategory>()
                .WithMany()
                .HasForeignKey(product => product.SubCategoryID);

            modelBuilder.Entity<ProductOption>()
                .HasOne<Product>()
                .WithMany()
                .HasForeignKey(productOption => productOption.ProductID);

            modelBuilder.Entity<TimeSheet>()
                .HasOne<User>()
                .WithMany()
                .HasForeignKey(timeSheet => timeSheet.UserID);

            modelBuilder.Entity<User>()
                .HasMany(e => e.Roles)
                .WithMany(e => e.Users)
                .UsingEntity<UserRole>();

            modelBuilder.Entity<UserLog>()
                .HasOne<User>()
                .WithMany()
                .HasForeignKey(userLog => userLog.UserID);

            base.OnModelCreating(modelBuilder);
        }
    }
}