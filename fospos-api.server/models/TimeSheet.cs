using System.ComponentModel.DataAnnotations.Schema;

namespace FosposApi.Server.Models
{
    [Table("TimeSheet")]
    public class TimeSheet
    {
        public int ID { get; set; }
        public int UserID { get; set; }
        public double DailyHours { get; set; }
        public double PayPeriodHours { get; set; }
        public double YearlyHours { get; set; }
        public double YTDPay { get; set; }
        public double PayPeriodPay { get; set; }
    }
}