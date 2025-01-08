using System.ComponentModel.DataAnnotations.Schema;

namespace FosposApi.Server.Models
{
    [Table("Category")]
    public class Category
    {
        public int ID { get; set; }
        public string Name { get; set; } = string.Empty;
    }
}