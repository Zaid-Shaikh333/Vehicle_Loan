﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VehicleLoanAPI.Models;
using VehicleLoanAPI.Service;

namespace VehicleLoanAPI.Controllers
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

        private readonly IAdminRepository approvalRepository;
        //private readonly Vehicle_LoanContext db;

        public ApprovalsController(IAdminRepository vehicle_LoanRepository)
        {
            approvalRepository = vehicle_LoanRepository;
        }

        // GET: api/Approvals
        /*[HttpGet]
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

        //[HttpGet]
        /* public IActionResult GetApprovalList(int id)
          {
              var gal = (from l in LoanDetail
                         join a in Approval
                         on l.loan_id equals a.loan_id
                         join v in VehicleDetail
                         on v.vehicle_id equals a.vehicle_id
                         select new
                         {
                             l.loan_id,
                             a.status,
                             l.emi,
                             l.interestrate,
                             l.amount,
                             l.startDate,
                             l.tenure,
                             v.model
                         });

              return Ok(gal);
        }*/

        [HttpGet]
        public async Task<IActionResult> GetPending_Applications()
        {
            try
            {
                dynamic details = await approvalRepository.GetPending_Applications();
                    if (details.Count >0)
                {
                    return Ok(details);
                }
                else
                {
                    return NotFound("Record not found!!!");
                }
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}
