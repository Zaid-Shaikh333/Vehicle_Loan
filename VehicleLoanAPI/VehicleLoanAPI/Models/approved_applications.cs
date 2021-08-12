using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VehicleLoanAPI.Models
{
    public class approved_applications
    {
        //u.user_id,u.first_name,u.last_name,a.status,v.manufacturer,v.vehicle_type,v.vehicle_model,
        //l.loan_amount,l.loan_tenure,l.start_date,l.end_date,l.rate_of_interest,l.monthly_emi
        [Key]
        public int user_Id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string status { get; set; }
        public string manufacturer { get; set; }
        public string vehicle_type { get; set; }
        public string vehicle_model { get; set; }
        public long? loan_amount { get; set; }
        public int? loan_tenure { get; set; }
        public DateTime? start_date { get; set; }
        public DateTime? end_date { get; set; }
        public decimal? rate_of_interest { get; set; }
        public long? monthly_emi { get; set; }
    }
}
