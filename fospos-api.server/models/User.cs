namespace FosposApi.Server.Models
{
    public class User
    {
        public int ID { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty; // Hashed password
        public int RoleID { get; set; }
    }
}