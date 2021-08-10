using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VehicleLoanAPI.Models;

namespace VehicleLoanAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmiController : ControllerBase
    {
        private readonly Vehicle_LoanContext db;

        public EmiController(Vehicle_LoanContext context)
        {
           db = context;
        }

        [HttpGet]
        public IActionResult GetEmi()
        {
            List<Emi> emis = new List<Emi>();
            
            return Ok();
        }
    }
}
