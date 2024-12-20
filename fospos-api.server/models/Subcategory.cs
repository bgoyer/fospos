namespace FosposApi.Server.Models
{
    public class Subcategory
    {
        public int ID { get; set; }
        public string Name { get; set; } = string.Empty;
        public int CategoryID { get; set; }
    }
}