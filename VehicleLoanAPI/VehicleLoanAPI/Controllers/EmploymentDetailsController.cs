using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VehicleLoanAPI.Models;

namespace VehicleLoanAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmploymentDetailsController : ControllerBase
    {
        private readonly Vehicle_LoanContext _context;

        public EmploymentDetailsController(Vehicle_LoanContext context)
        {
            _context = context;
        }

        // GET: api/EmploymentDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmploymentDetail>>> GetEmploymentDetails()
        {
            return await _context.EmploymentDetails.ToListAsync();
        }

        // GET: api/EmploymentDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmploymentDetail>> GetEmploymentDetail(int id)
        {
            var employmentDetail = await _context.EmploymentDetails.FindAsync(id);

            if (employmentDetail == null)
            {
                return NotFound();
            }

            return employmentDetail;
        }

        // PUT: api/EmploymentDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmploymentDetail(int id, EmploymentDetail employmentDetail)
        {
            if (id != employmentDetail.EmployementId)
            {
                return BadRequest();
            }

            _context.Entry(employmentDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmploymentDetailExists(id))
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

        // POST: api/EmploymentDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmploymentDetail>> PostEmploymentDetail(EmploymentDetail employmentDetail)
        {
            _context.EmploymentDetails.Add(employmentDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmploymentDetail", new { id = employmentDetail.EmployementId }, employmentDetail);
        }

        // DELETE: api/EmploymentDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmploymentDetail(int id)
        {
            var employmentDetail = await _context.EmploymentDetails.FindAsync(id);
            if (employmentDetail == null)
            {
                return NotFound();
            }

            _context.EmploymentDetails.Remove(employmentDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmploymentDetailExists(int id)
        {
            return _context.EmploymentDetails.Any(e => e.EmployementId == id);
        }
    }
}
