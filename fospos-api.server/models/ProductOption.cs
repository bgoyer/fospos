using System.ComponentModel.DataAnnotations.Schema;

namespace FosposApi.Server.Models
{
    [Table("ProductOption")]
    public class ProductOption
    {
        public int ID { get; set; }
        public int ProductID { get; set; }
        public string? Name { get; set; }
        public decimal Price { get; set; }
    }
}