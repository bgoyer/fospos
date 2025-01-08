using System.ComponentModel.DataAnnotations.Schema;

namespace FosposApi.Server.Models
{
    [Table("Cart")]
    public class Cart
    {
        public int ID { get; set; }
        public DateTime SaleDate { get; set; }
        public int CustomerID { get; set; }
        public decimal TotalAmount { get; set; }
        public bool IsComplete { get; set; }
        public string? RawSaleData { get; set; }
    }
}