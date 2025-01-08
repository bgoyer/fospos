using System.ComponentModel.DataAnnotations.Schema;

namespace FosposApi.Server.Models
{
    [Table("CartItem")]
    public class CartItem
    {
        public int ID { get; set; }
        public int CartID { get; set; }
        public int ProductID { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}