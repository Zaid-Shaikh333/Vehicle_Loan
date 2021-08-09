using System;
using System.Collections.Generic;

#nullable disable

namespace PrjWebAPI1.Models
{
    public partial class Approval
    {
        public int ApplicationId { get; set; }
        public int? UserId { get; set; }
        public int? VehicleId { get; set; }
        public int? LoanId { get; set; }
        public int? AdminId { get; set; }
        public string Status { get; set; }
        public string Description { get; set; }

        public virtual Admin Admin { get; set; }
        public virtual LoanDetail Loan { get; set; }
        public virtual User User { get; set; }
        public virtual VehicleDetail Vehicle { get; set; }
    }
}
