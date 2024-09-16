public class Order
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string? Name { get; set; }
    public DateTime Date { get; set; }
    public bool IsComplete { get; set; }
    public List<OrderItem>? Items { get; } = new List<OrderItem>();
}