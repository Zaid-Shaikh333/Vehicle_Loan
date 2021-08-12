using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VehicleLoanAPI.Models
{
    public class pending_applications
    {
        //u.user_id,u.first_name,u.last_name,a.status,u.age,u.gender,u.Email,u.address,u.city,u.state,u.pincode,
        //v.manufacturer,v.vehicle_type,v.vehicle_model,v.exshowroom_price
                [Key]
        public int user_id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public int? age { get; set; }
        public string gender { get; set; }
        public string Email { get; set; }
        public string address { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public int? pincode { get; set; }
        public string manufacturer { get; set; }
        public string vehicle_type { get; set; }
        public string vehicle_model { get; set; }
        public long? exshowroom_price { get; set; }
        public string status { get; set; }
        public long? loan_amount { get; set; }
        public int? loan_tenure { get; set; }
        public decimal? rate_of_interest { get; set; }
    }
}
