using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace VehicleLoanAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentController : ControllerBase
    {
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
    }
}
