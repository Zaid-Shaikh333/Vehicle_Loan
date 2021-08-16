using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using VehicleLoanAPI.Models;
using VehicleLoanAPI.Service;

namespace VehicleLoanAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentController : ControllerBase
    {



        private readonly Vehicle_LoanContext _context;

        public DocumentController(Vehicle_LoanContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Document>>> GetDocuments()
        {
            return await _context.Documents.ToListAsync();
        }


        [HttpPost, DisableRequestSizeLimit]
        public async Task<IActionResult> Upload()
        {
            try
            {
                var dbPath = "";
                List<string> doc = new List<string>();
                Document document = new Document();
                var files = Request.Form.Files;
                var folderName = Path.Combine("Resources", "Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (files.Any(f => f.Length == 0))
                {
                    return Ok("not found");
                }

                for (int i = 0; i < 4; i++)
                {

                    var fileName = ContentDispositionHeaderValue.Parse(files[i].ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    dbPath = Path.Combine(folderName, fileName); //you can add this path to a list and then return all dbPaths to the client if require
                    doc.Add(dbPath);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        files[i].CopyTo(stream);
                    }

                }
                document.AadharCard = doc[0];
                document.PanCard = doc[1];
                document.SalarySlip = doc[2];
                document.Photo = doc[3];

                _context.Documents.Add(document);
                await _context.SaveChangesAsync();
                return Ok(new { doc });
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }
    }
}
