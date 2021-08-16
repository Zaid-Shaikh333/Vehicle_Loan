using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VehicleLoanAPI.Models;
using VehicleLoanAPI.Service;

namespace VehicleLoanAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PendingController : ControllerBase
    {

        private readonly IAdminRepository pendingRepository;
        private readonly Vehicle_LoanContext db;
     

        public PendingController(IAdminRepository vehicle_LoanRepository,Vehicle_LoanContext context)
        {
            pendingRepository = vehicle_LoanRepository;
            db = context;
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
        private bool UserExists(int id)
        {
            return db.Approvals.Any(e => e.UserId == id);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> SetApproval_Application(int id, Approval approval)
        {
            if (id != approval.UserId)
            {
                return BadRequest();
            }

            db.Entry(approval).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
    }
}
