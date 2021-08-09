using System;
using System.Collections.Generic;

#nullable disable

namespace PrjWebAPI1.Models
{
    public partial class Document
    {
        public int? UserId { get; set; }
        public string AadharCard { get; set; }
        public string PanCard { get; set; }
        public string SalarySlip { get; set; }
        public string Photo { get; set; }

        public virtual User User { get; set; }
    }
}
