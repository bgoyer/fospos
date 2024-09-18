namespace FosposApi.Server.Models
{
    public class TimeSheet
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public double DailyHours { get; set; }
        public double PayPeriodHours { get; set; }
        public double YearlyHours { get; set; }
        public double YTDPay { get; set; }
        public double PayPeriodPay { get; set; }
    }
}