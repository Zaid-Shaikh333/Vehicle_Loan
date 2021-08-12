using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using VehicleLoanAPI.Models;

namespace VehicleLoanAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ForgotPasswordController : ControllerBase
    {
        private readonly Vehicle_LoanContext db;

        public ForgotPasswordController(Vehicle_LoanContext context)
        {
            db = context;
        }

        public bool CheckEmail(string email)
        {
            var isValidEmail = db.Users.Where(w => w.Email == email).FirstOrDefault();
            if (isValidEmail == null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }


        [Route("SendUserEmail")]
        [HttpGet]
        public async Task<int> SendEmail(string to)
        {
            if (CheckEmail(to) == true)
            {
                // string from = "skartshopping1@gmail.com";
                string subject = "Welcome to Vehicle Loan Adda";
                Random generator = new Random();
                int r = generator.Next(1000, 10000);
                string body = "Hello , Your otp is " + r;

                SmtpClient smtp = new SmtpClient();
                using SmtpClient email = new SmtpClient
                {
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = false,
                    EnableSsl = true,
                    Host = "smtp.gmail.com",
                    Port = 587,
                    Credentials = new NetworkCredential("pamzloanservices@gmail.com", "1234@pamz"),
                };
                email.Send("pamzloanservices@gmail.com", to, subject, body);
                /*MailMessage mm = new MailMessage();
                mm.From = new MailAddress(from);
                mm.To.Add(to);
                mm.Subject = subject;
                mm.Body = body;
                await Task.Run(() => smtp.SendAsync(mm, null));*/
                return r;
            }
            else
            {
                return 0;
            }

        }
    }
}
