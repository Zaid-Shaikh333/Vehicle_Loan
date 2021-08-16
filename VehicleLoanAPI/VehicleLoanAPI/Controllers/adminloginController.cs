using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VehicleLoanAPI.Service;

namespace VehicleLoanAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class adminloginController : ControllerBase
    {

        private readonly IAdminRepository approvalRepository;
        //private readonly Vehicle_LoanContext db;

        public adminloginController(IAdminRepository vehicle_LoanRepository)
        {
            approvalRepository = vehicle_LoanRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetALogin(string Email, string password)
        {
            
            try
            {
                dynamic details = await approvalRepository.GetALogin(Email, password);
                if (details.Count > 0)
                {
                    return Ok(details);
                }
                else
                {
                    return NotFound("Record not found!!!");
                }
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
