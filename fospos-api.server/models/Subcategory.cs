using System.ComponentModel.DataAnnotations.Schema;

namespace FosposApi.Server.Models
{
    [Table("SubCategory")]
    public class SubCategory
    {
        public int ID { get; set; }
        public string Name { get; set; } = string.Empty;
        public int CategoryID { get; set; }
    }
}