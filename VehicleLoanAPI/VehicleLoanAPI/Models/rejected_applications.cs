using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VehicleLoanAPI.Models
{
    public class rejected_applications 
    {
        [Key]
        public int user_id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string status { get; set; }
        public string description { get; set; }
    }
}
