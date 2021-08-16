using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VehicleLoanAPI.Models;
using Newtonsoft.Json;
using Microsoft.AspNetCore.JsonPatch;

namespace VehicleLoanAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanDetailsController : ControllerBase
    {
        private readonly Vehicle_LoanContext _context;
        private readonly Vehicle_LoanContext db;


        public LoanDetailsController(Vehicle_LoanContext context, Vehicle_LoanContext context1
)
        {
            _context = context;
            db = context1;

        }

        // GET: api/LoanDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LoanDetail>>> GetLoanDetails()
        {
            return await _context.LoanDetails.ToListAsync();
        }

        // GET: api/LoanDetails/5
        [HttpGet("{id}")]
        public List<LoanDetail> Getvehicledetails1(int id)
        {
            var loanDetail = db.LoanDetails.Where(x => x.UserId == id).ToList();

            return loanDetail;



        }

        /*[HttpGet("{id}")]
        public async Task<ActionResult>> GetSchedule(int id)
        {
            dynamic loanDetail = await _context.LoanDetails.Where(u => u.UserId == id).ToListAsync();

            if (loanDetail == null)
            {
                return NotFound();
            }

            return loanDetail;
        }*/

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

        [HttpPut]
        [Route("{LoanId}/{Status}")]
        public IActionResult Put(int LoanId, string Status)
        {
            try
            {
                //nodes collection is an in memory list of nodes for this example
                /*(from cl in _context.Claims
                 where cl.ClaimNumber == claimNumber
                 select cl).First().ApprovalStatus = status;*/
                (from l in _context.LoanDetails
                 where l.LoanId == LoanId
                 select l).First().Status = Status;
                _context.SaveChanges();
                               
                return Ok("Updated!!");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }
        }
    }
}
