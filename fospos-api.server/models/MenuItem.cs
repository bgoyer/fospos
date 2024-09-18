namespace FosposApi.Server.Models
{
    public class MenuItem
    {
        public required int Id { get; set; }
        public required string Name { get; set; }
        public required int CategoryId { get; set; }
        public required int SubcategoryId { get; set; }
        public required double BasePrice { get; set; }
        public required List<int> ItemOptionIds { get; set; }  
    }
}