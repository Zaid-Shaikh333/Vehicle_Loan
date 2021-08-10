using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

#nullable disable

namespace VehicleLoanAPI.Models
{
    [DataContract]
    public partial class EmploymentDetail
    {
        public int? UserId { get; set; }
        [DataMember]
        public string EmployementType { get; set; }
        [DataMember]
        public long? AnnualSalary { get; set; }
        [DataMember]
        public long? Emi { get; set; }
        [DataMember]
        public long? OtherIncome { get; set; }
        public int EmployementId { get; set; }

        public virtual User User { get; set; }
    }
}
