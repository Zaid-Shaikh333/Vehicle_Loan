using System;
using System.Collections.Generic;

#nullable disable

namespace VehicleLoanAPI.Models
{
    public partial class EmploymentDetail
    {
        public int? UserId { get; set; }
        public string EmployementType { get; set; }
        public long? AnnualSalary { get; set; }
        public long? Emi { get; set; }
        public long? OtherIncome { get; set; }

        public virtual User User { get; set; }
    }
}
