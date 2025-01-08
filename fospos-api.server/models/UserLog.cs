using System.ComponentModel.DataAnnotations.Schema;

namespace FosposApi.Server.Models
{
    [Table("UserLog")]
    public class UserLog
    {
        public int ID { get; set; }
        public int UserID { get; set; }
        public DateTime LogDate { get; set; }
        public string? Message { get; set; }
        public int Severity { get; set; }
    }
}