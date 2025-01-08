using System.ComponentModel.DataAnnotations.Schema;

namespace FosposApi.Server.Models
{
    [Table("Role")]
    public class Role
    {
        public int ID { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public IEnumerable<User> Users { get; set; } = [];
    }
}