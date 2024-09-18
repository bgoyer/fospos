namespace FosposApi.Server.Models
{
    public class Subcategory
    {
        public required int Id { get; set; }
        public required string Name { get; set; }
        public required int ParentCategory  { get; set; }
    }
}
