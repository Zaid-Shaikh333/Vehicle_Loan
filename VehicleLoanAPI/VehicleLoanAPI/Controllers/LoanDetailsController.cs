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
    public class LoanDetailsController : ControllerBase
    {
        private readonly Vehicle_LoanContext _context;

        public LoanDetailsController(Vehicle_LoanContext context)
        {
            _context = context;
        }

        // GET: api/LoanDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LoanDetail>>> GetLoanDetails()
        {
            return await _context.LoanDetails.ToListAsync();
        }

        // GET: api/LoanDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LoanDetail>> GetLoanDetail(int id)
        {
            var loanDetail = await _context.LoanDetails.FindAsync(id);

            if (loanDetail == null)
            {
                return NotFound();
            }

            return loanDetail;
        }

        // PUT: api/LoanDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLoanDetail(int id, LoanDetail loanDetail)
        {
            if (id != loanDetail.LoanId)
            {
                return BadRequest();
            }

            _context.Entry(loanDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoanDetailExists(id))
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

        // POST: api/LoanDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<LoanDetail>> PostLoanDetail(LoanDetail loanDetail)
        {
            _context.LoanDetails.Add(loanDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLoanDetail", new { id = loanDetail.LoanId }, loanDetail);
        }

        // DELETE: api/LoanDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLoanDetail(int id)
        {
            var loanDetail = await _context.LoanDetails.FindAsync(id);
            if (loanDetail == null)
            {
                return NotFound();
            }

            _context.LoanDetails.Remove(loanDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LoanDetailExists(int id)
        {
            return _context.LoanDetails.Any(e => e.LoanId == id);
        }
    }
}
