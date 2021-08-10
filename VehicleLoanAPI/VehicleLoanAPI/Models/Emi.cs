using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VehicleLoanAPI.Models
{
    public class Emi
    {
        public decimal Principle{get;set;}
        public int Tenure { get; set; }
        public int ROI { get; set; }
    }
}
