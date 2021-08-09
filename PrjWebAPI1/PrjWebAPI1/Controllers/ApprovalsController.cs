using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PrjWebAPI1.Models;

namespace PrjWebAPI1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApprovalsController : ControllerBase
    {
        private readonly Vehicle_LoanContext _context;

        public ApprovalsController(Vehicle_LoanContext context)
        {
            _context = context;
        }

        // GET: api/Approvals
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Approval>>> GetApprovals()
        {
            return await _context.Approvals.ToListAsync();
        }

        // GET: api/Approvals/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Approval>> GetApproval(int id)
        {
            var approval = await _context.Approvals.FindAsync(id);

            if (approval == null)
            {
                return NotFound();
            }

            return approval;
        }

        // PUT: api/Approvals/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutApproval(int id, Approval approval)
        {
            if (id != approval.ApplicationId)
            {
                return BadRequest();
            }

            _context.Entry(approval).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApprovalExists(id))
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

        // POST: api/Approvals
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Approval>> PostApproval(Approval approval)
        {
            _context.Approvals.Add(approval);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetApproval", new { id = approval.ApplicationId }, approval);
        }

        // DELETE: api/Approvals/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteApproval(int id)
        {
            var approval = await _context.Approvals.FindAsync(id);
            if (approval == null)
            {
                return NotFound();
            }

            _context.Approvals.Remove(approval);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ApprovalExists(int id)
        {
            return _context.Approvals.Any(e => e.ApplicationId == id);
        }
    }
}
