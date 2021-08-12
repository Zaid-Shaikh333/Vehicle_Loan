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
    public class RejectedController : ControllerBase
    {
        private readonly IAdminRepository rejectedRepository;
        //private readonly Vehicle_LoanContext db;

        public RejectedController(IAdminRepository vehicle_LoanRepository)
        {
            rejectedRepository = vehicle_LoanRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetRejected_Applications()
        {

            try
            {
                dynamic details = await rejectedRepository.GetRejected_Applications();
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
