using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
            if (isValidEmail != null)
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

        public int getid(string email)
        {
            User user = new User();
            user.UserId = db.Users.First(x => x.Email == email).UserId;
            return user.UserId;
        }

        [Route("UpdateUserPassword")]
        [HttpPut]
        public dynamic UpdatePassword(string email, string password)
        {
            //var query = from user in tblUser where user.email == email select user;
            int id = getid(email);
            var query = db.Users.Find(id);
            query.Password = password;
            db.Entry(query).State = EntityState.Modified;
            db.SaveChanges();
            // return Request.CreateResponse(HttpStatusCode.OK, "Valid");
            return Ok("Valid");
        }

    }
}
