using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VehicleLoanAPI.Models;

namespace VehicleLoanAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentsController : ControllerBase
    {
        private readonly Vehicle_LoanContext _context;

        public DocumentsController(Vehicle_LoanContext context)
        {
            _context = context;
        }

        // GET: api/Documents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Document>>> GetDocuments()
        {
            return await _context.Documents.ToListAsync();
        }

        // GET: api/Documents/5
        /*[HttpGet("{id}")]
        public async Task<ActionResult<Document>> GetDocument(int id)
        {
            List<string> document = await _context.Documents.Where(d => d.UserId == id).Select(d => new { d.AadharCard, d.PanCard, d.SalarySlip, d.Photo }).ToListAsync();
            //var document = await _context.Documents.FindAsync(id);

            if (document == null)
            {
                return NotFound();
            }

            return document;
        }*/

        // PUT: api/Documents/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDocument(int id, Document document)
        {
            if (id != document.DocumentsId)
            {
                return BadRequest();
            }

            _context.Entry(document).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DocumentExists(id))
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

        // POST: api/Documents
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Document>> PostDocument(Document document)
        {
            List<Document> doc = new List<Document>();
            try
            {
                dynamic aadharfile = Request.Form.Files[0];
                dynamic panfile = Request.Form.Files[1];
                dynamic photofile = Request.Form.Files[2];
                dynamic salaryslipfile = Request.Form.Files[3];
                dynamic filepath = "C: \\Users\\Anita\\Desktop\\Vehicle Loan\\VehicleProject\\src\\assets";
                if (aadharfile.Length > 0 && panfile.Length > 0 && photofile.Length > 0 && salaryslipfile.Length > 0)
                {
                    dynamic aadharname = ContentDispositionHeaderValue.Parse(aadharfile.ContentDisposition).FileName.Trim();
                    dynamic panName = ContentDispositionHeaderValue.Parse(panfile.ContentDisposition).FileName.Trim();
                    dynamic photoname = ContentDispositionHeaderValue.Parse(photofile.ContentDisposition).FileName.Trim();
                    dynamic sslipname = ContentDispositionHeaderValue.Parse(salaryslipfile.ContentDisposition).FileName.Trim();

                    using (dynamic stream = new FileStream(filepath, FileMode.Create))
                    {
                        aadharfile.CopyTo(stream);
                        panfile.CopyTo(stream);
                        photofile.CopyTo(stream);
                        salaryslipfile.CopyTo(stream);
                    }
                    _context.Documents.Add(document);
                    await _context.SaveChangesAsync();

                    return CreatedAtAction("GetDocument", new { id = document.DocumentsId }, document);
                    // return Ok(new { filepath });

                }
                else
                {
                    return NotFound("NO Files Found!!!!");
                }


            }
            catch (Exception e)
            {
                return BadRequest(e);
            }

            /*_context.Documents.Add(document);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDocument", new { id = document.DocumentsId }, document);*/
        }

        /*[HttpPost,DisableRequestSizeLimit]
        public IActionResult Upload()
        {
            try
            {
                dynamic aadharfile = Request.Form.Files[0];
                dynamic panfile = Request.Form.Files[1];
                dynamic photofile = Request.Form.Files[2];
                dynamic salaryslipfile = Request.Form.Files[3];
                dynamic filepath = "C: \\Users\\Anita\\Desktop\\Vehicle Loan\\VehicleProject\\src\\assets";
                if (aadharfile.Length>0 && panfile.Length > 0 && photofile.Length > 0 && salaryslipfile.Length > 0)
                {
                    dynamic aadharname = ContentDispositionHeaderValue.Parse(aadharfile.ContentDisposition).FileName.Trim();
                    dynamic panName = ContentDispositionHeaderValue.Parse(panfile.ContentDisposition).FileName.Trim();
                    dynamic photoname = ContentDispositionHeaderValue.Parse(photofile.ContentDisposition).FileName.Trim();
                    dynamic sslipname = ContentDispositionHeaderValue.Parse(salaryslipfile.ContentDisposition).FileName.Trim();

                    using (dynamic stream = new FileStream(filepath, FileMode.Create))
                    {
                        aadharfile.CopyTo(stream);
                        panfile.CopyTo(stream);
                        photofile.CopyTo(stream);
                        salaryslipfile.CopyTo(stream);
                    }
                    return Ok(new {filepath});

                }
                else
                {
                    return NotFound("NO Files Found!!!!");
                }

            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }*/

        // DELETE: api/Documents/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDocument(int id)
        {
            var document = await _context.Documents.FindAsync(id);
            if (document == null)
            {
                return NotFound();
            }

            _context.Documents.Remove(document);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DocumentExists(int id)
        {
            return _context.Documents.Any(e => e.DocumentsId == id);
        }


    }
}
