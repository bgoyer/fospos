using System.ComponentModel.DataAnnotations.Schema;

namespace FosposApi.Server.Models
{
    [Table("Payment")]
    public class Payment
    {
        public int ID { get; set; }
        public int CartID { get; set; }
        public string PaymentMethod { get; set; } = string.Empty; // e.g., Cash, Credit Card
        public decimal AmountPaid { get; set; }
        public DateTime PaymentDate { get; set; }
    }
}