using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PrjWebAPI1.Services
{
    public interface IVehicleRepository
    {
        //async
        Task<string> GetUserbyId(int id);
        //sync
        string Getuser(int id);
    }
}
