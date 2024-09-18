﻿namespace FosposApi.Server.Models
{
    public class UserLog
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime Date { get; set; }
        public string? Message { get; set; }
        public int Severity { get; set; }
    }
}