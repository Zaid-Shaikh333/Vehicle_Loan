using System;
using System.Collections.Generic;

#nullable disable

namespace VehicleLoanAPI.Models
{
    public partial class User
    {
        public User()
        {
            EmploymentDetails = new HashSet<EmploymentDetail>();
            LoanDetails = new HashSet<LoanDetail>();
            VehicleDetails = new HashSet<VehicleDetail>();
        }

        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Age { get; set; }
        public string Gender { get; set; }
        public long? MobileNo { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int? Pincode { get; set; }

        public virtual ICollection<EmploymentDetail> EmploymentDetails { get; set; }
        public virtual ICollection<LoanDetail> LoanDetails { get; set; }
        public virtual ICollection<VehicleDetail> VehicleDetails { get; set; }
    }
}
