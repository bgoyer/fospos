using System.ComponentModel.DataAnnotations.Schema;

namespace FosposApi.Server.Models
{
    [Table("UserRole")]
    public class UserRole
    {
        public int UserID { get; set; }
        public int RoleID { get; set; }
    }
}