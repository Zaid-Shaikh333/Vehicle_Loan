using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VehicleLoanAPI.Models
{
    public class adminlogin
    {
        [Key]
        public int admin_id { get; set; }
        public string Email { get; set; }
        public string password { get; set; }
        


    }
}
