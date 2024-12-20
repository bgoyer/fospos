namespace FosposApi.Server.Models
{
    public class Customer
    {
        public int ID { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Email { get; set; }
        public string? Phone { get; set; }
    }
}