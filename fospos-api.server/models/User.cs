public class User
{
    public int UserID { get; set; }
    public string? Name { get; set; }
    public int Pin { get; set; }
    public TimeSheet[]? TimeSheets { get; set; }
    public Order[]? ActiveOrders { get; set; }
    public Order[]? OrderHistory { get; set; }
    public Log[]? LogHistory { get; set; }
}