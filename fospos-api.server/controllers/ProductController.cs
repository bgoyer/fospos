using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FosposApi.Server.Database;
using FosposApi.Server.Models;

namespace FosposApi.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : GenericController<Product>
    {
        public ProductController(PosDbContext dbContext) : base(dbContext) { }
    }
}