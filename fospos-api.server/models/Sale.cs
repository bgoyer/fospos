namespace FosposApi.Server.Models
{
    public class Sale
    {
        public int ID { get; set; }
        public DateTime SaleDate { get; set; }
        public int? CustomerID { get; set; }
        public decimal TotalAmount { get; set; }
        public bool IsComplete { get; set; }
    }
}