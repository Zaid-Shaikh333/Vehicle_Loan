using System;
using System.Collections.Generic;

#nullable disable

namespace PrjWebAPI1.Models
{
    public partial class Admin
    {
        public Admin()
        {
            Approvals = new HashSet<Approval>();
        }

        public int AdminId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Approval> Approvals { get; set; }
    }
}
