using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FosposApi.Server.Database;
using FosposApi.Server.Models;

namespace FosposApi.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesController : GenericController<Sale>
    {
        public SalesController(PosDbContext dbContext) : base(dbContext) { }
    }
}