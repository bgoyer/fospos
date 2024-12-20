namespace FosposApi.Server.Models
{
    public class SaleItem
    {
        public int ID { get; set; }
        public int SaleID { get; set; }
        public int ProductID { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}