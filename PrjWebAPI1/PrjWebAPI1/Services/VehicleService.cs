using PrjWebAPI1.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PrjWebAPI1.Services
{
    public class VehicleService: IVehicleRepository
    {
        private readonly Vehicle_LoanContext db;
        public VehicleService(Vehicle_LoanContext context)
        {
            db = context;
        }
        //sync way
        public string Getuser(int id)
        {
            dynamic username = db.Users.Where(e => e.UserId == id).Select(n => n.FirstName).FirstOrDefault();
            return username;
        }
        //Async way to increase cpu performance
        public async Task<string> GetUserbyId(int id)
        {
            dynamic user =await db.Users.Where(e => e.UserId == id).Select(n => n.FirstName).FirstOrDefaultAsync();
            return user;
        }
    }
}
