using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FosposApi.Server.Database;
using FosposApi.Server.Models;

namespace FosposApi.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : GenericController<Payment>
    {
        public PaymentController(PosDbContext dbContext) : base(dbContext) { }
    }
}