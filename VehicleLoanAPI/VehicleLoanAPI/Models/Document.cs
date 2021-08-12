using System;
using System.Collections.Generic;

#nullable disable

namespace VehicleLoanAPI.Models
{
    public partial class Document
    {
        public int? UserId { get; set; }
        public string AadharCard { get; set; }
        public string PanCard { get; set; }
        public string SalarySlip { get; set; }
        public string Photo { get; set; }
        public int DocumentsId { get; set; }

        public virtual User User { get; set; }
    }
}
