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
    public class PendingController : ControllerBase
    {

        private readonly IAdminRepository pendingRepository;
        //private readonly Vehicle_LoanContext db;

        public PendingController(IAdminRepository vehicle_LoanRepository)
        {
            pendingRepository = vehicle_LoanRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetPending_Applications()
        {

            try
            {
                dynamic details = await pendingRepository.GetPending_Applications();
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
