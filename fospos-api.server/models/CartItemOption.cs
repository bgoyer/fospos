using System.ComponentModel.DataAnnotations.Schema;

namespace FosposApi.Server.Models
{
    [Table("CartItemOption")]
    public class CartItemOption
    {
        public int ID { get; set; }
        public int CartItemID { get; set; }
        public int ProductOptionID { get; set; }
    }
}