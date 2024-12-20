namespace FosposApi.Server.Models
{
    public class UserLog
    {
        public int ID { get; set; }
        public int UserID { get; set; }
        public DateTime Date { get; set; }
        public string? Message { get; set; }
        public int Severity { get; set; }
    }
}