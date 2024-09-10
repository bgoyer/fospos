public class OrderItem
{
    public int Id { get; set; }
    public ItemDetail? Item { get; set; } 
    public List<ItemOption>? Options { get; } = new List<ItemOption>();
}