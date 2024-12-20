using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FosposApi.Server.Database;
using FosposApi.Server.Models;

namespace FosposApi.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaleItemsController : GenericController<SaleItem>
    {
        public SaleItemsController(PosDbContext dbContext) : base(dbContext) { }
    }
}