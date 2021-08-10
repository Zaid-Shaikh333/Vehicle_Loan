using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

#nullable disable

namespace VehicleLoanAPI.Models
{
    [DataContract]
    public partial class Approval
    {
        [DataMember]
        public int ApplicationId { get; set; }
        [DataMember]
        public int? UserId { get; set; }
        [DataMember]
        public int? VehicleId { get; set; }
        [DataMember]
        public int? LoanId { get; set; }
        [DataMember]
        public int? AdminId { get; set; }
        [DataMember]
        public string Status { get; set; }
        [DataMember]
        public string Description { get; set; }

        public virtual Admin Admin { get; set; }
        public virtual LoanDetail Loan { get; set; }
        public virtual User User { get; set; }
        public virtual VehicleDetail Vehicle { get; set; }
    }
}
