using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VehicleLoanAPI.Models;

namespace VehicleLoanAPI.Service
{
    public class AdminService:IAdminRepository
    {
        private readonly Vehicle_LoanContext db;

        public AdminService(Vehicle_LoanContext context)
        {
            db = context;
        }

        public async Task<List<pending_applications>> GetPending_Applications()
        {
            dynamic pending = await db.Pending_Applications.FromSqlRaw("[dbo].[pending_applications]").ToListAsync();
            return pending;
        }
        public async Task<List<approved_applications>> GetApproved_Applications()
        {
            dynamic approved = await db.Approved_Applications.FromSqlRaw("[dbo].[approved_applications]").ToListAsync();
            return approved;
        }
        public async Task<List<rejected_applications>> GetRejected_Applications()
        {
            dynamic rejected = await db.Rejected_Applications.FromSqlRaw("[dbo].[rejected_applications]").ToListAsync();
            return rejected;
        }

        public async Task<List<UserLogin>> GetLogin(string email, string password)
        {
            dynamic login = await db.UserLogins.FromSqlRaw("[dbo].[user_login] {0},{1}",email,password).ToListAsync();
            return login;
        }

        public async Task<List<adminlogin>> GetALogin(string Email, string password)
        {
            dynamic login = await db.Adminlogins.FromSqlRaw("[dbo].[admin_login] {0},{1}", Email, password).ToListAsync();
            return login;
        }
    }
}
