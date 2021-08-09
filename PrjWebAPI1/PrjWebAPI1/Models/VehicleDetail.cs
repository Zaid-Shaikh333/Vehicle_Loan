using System;
using System.Collections.Generic;

#nullable disable

namespace PrjWebAPI1.Models
{
    public partial class VehicleDetail
    {
        public VehicleDetail()
        {
            Approvals = new HashSet<Approval>();
            LoanDetails = new HashSet<LoanDetail>();
        }

        public int? UserId { get; set; }
        public string Manufacturer { get; set; }
        public string VehicleType { get; set; }
        public string VehicleModel { get; set; }
        public long? ExshowroomPrice { get; set; }
        public int VehicleId { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<Approval> Approvals { get; set; }
        public virtual ICollection<LoanDetail> LoanDetails { get; set; }
    }
}
