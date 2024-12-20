namespace FosposApi.Server.Models
{
    public class Product
    {
        public int ID { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public decimal Price { get; set; }
        public int QuantityInStock { get; set; }
        public int SubcategoryID { get; set; }
    }
}