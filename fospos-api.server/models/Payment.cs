namespace FosposApi.Server.Models
{
    public class Payment
    {
        public int ID { get; set; }
        public int SaleID { get; set; }
        public string PaymentMethod { get; set; } = string.Empty; // e.g., Cash, Credit Card
        public decimal AmountPaid { get; set; }
        public DateTime PaymentDate { get; set; }
    }
}