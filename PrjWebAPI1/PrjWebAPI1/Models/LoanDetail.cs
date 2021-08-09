using System;
using System.Collections.Generic;

#nullable disable

namespace PrjWebAPI1.Models
{
    public partial class LoanDetail
    {
        public LoanDetail()
        {
            Approvals = new HashSet<Approval>();
        }

        public int LoanId { get; set; }
        public int? UserId { get; set; }
        public int? VehicleId { get; set; }
        public long? LoanAmount { get; set; }
        public int? LoanTenure { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public decimal? RateOfInterest { get; set; }
        public long? MonthlyEmi { get; set; }

        public virtual User User { get; set; }
        public virtual VehicleDetail Vehicle { get; set; }
        public virtual ICollection<Approval> Approvals { get; set; }
    }
}
