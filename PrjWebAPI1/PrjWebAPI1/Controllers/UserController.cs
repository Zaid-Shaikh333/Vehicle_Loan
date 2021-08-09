using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PrjWebAPI1.Models;
using PrjWebAPI1.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PrjWebAPI1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IVehicleRepository vehicleRepository;
        public UserController(IVehicleRepository context)
        {
            vehicleRepository = context;
        }
        [HttpGet("{userid}")]
        public async Task<IActionResult> GetUserName(int userid)
        {
            dynamic user = await vehicleRepository.GetUserbyId(userid);
            if(user!=null)
            {
                return Ok(user);
            }
            else
            {
                return Ok("no data found!!!");
            }
        }
        

    }
}
