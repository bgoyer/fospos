public class ItemDetail
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public double BasePrice { get; set; }
    public List<ItemOption>? Options { get; } = new List<ItemOption>();
}