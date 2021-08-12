using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VehicleLoanAPI.Models;

namespace VehicleLoanAPI.Service
{
    public interface IAdminRepository
    {
        //interface
        public Task<List<pending_applications>> GetPending_Applications();
        public Task<List<approved_applications>> GetApproved_Applications();
        public Task<List<rejected_applications>> GetRejected_Applications();

    }
}
