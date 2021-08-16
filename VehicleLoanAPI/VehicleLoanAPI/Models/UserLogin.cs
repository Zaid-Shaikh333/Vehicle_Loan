using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VehicleLoanAPI.Models
{
    public class UserLogin
    {

        [Key]
        public int user_id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public int? age { get; set; }
        public string gender { get; set; }
        public long? mobile_no { get; set; }
        public string Email { get; set; }
        public string password { get; set; }
        public string address { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public int? pincode { get; set; }

        
    }
}
