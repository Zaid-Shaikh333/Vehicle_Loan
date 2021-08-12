using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace VehicleLoanAPI.Models
{
    public partial class Vehicle_LoanContext : DbContext
    {
        public Vehicle_LoanContext()
        {
        }

        public Vehicle_LoanContext(DbContextOptions<Vehicle_LoanContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<Approval> Approvals { get; set; }
        public virtual DbSet<Document> Documents { get; set; }
        public virtual DbSet<EmploymentDetail> EmploymentDetails { get; set; }
        public virtual DbSet<LoanDetail> LoanDetails { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<VehicleDetail> VehicleDetails { get; set; }
        public virtual DbSet<approved_applications> Approved_Applications { get; set; }
        public virtual DbSet<pending_applications> Pending_Applications { get; set; }
        public virtual DbSet<rejected_applications> Rejected_Applications { get; set; }
        public virtual DbSet<UserLogin> UserLogins { get; set; }

        /* protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
         {
             if (!optionsBuilder.IsConfigured)
             {
 #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                 optionsBuilder.UseSqlServer("Server=DESKTOP-A4ACC9P;Database=Vehicle_Loan;Trusted_Connection=True;");
             }
         }
        */
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.ToTable("Admin");

                entity.HasIndex(e => e.Email, "UQ__Admin__A9D10534A101442C")
                    .IsUnique();

                entity.Property(e => e.AdminId).HasColumnName("admin_id");

                entity.Property(e => e.Email).HasMaxLength(100);

                entity.Property(e => e.Password)
                    .HasMaxLength(100)
                    .HasColumnName("password");
            });

            modelBuilder.Entity<Approval>(entity =>
            {
                entity.HasKey(e => e.ApplicationId)
                    .HasName("PK__Approval__3BCBDCF2A9DE9DB1");

                entity.ToTable("Approval");

                entity.Property(e => e.ApplicationId).HasColumnName("application_id");

                entity.Property(e => e.AdminId).HasColumnName("admin_id");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .HasColumnName("description");

                entity.Property(e => e.LoanId).HasColumnName("loan_id");

                entity.Property(e => e.Status)
                    .HasMaxLength(30)
                    .HasColumnName("status");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.VehicleId).HasColumnName("vehicle_id");

                entity.HasOne(d => d.Admin)
                    .WithMany(p => p.Approvals)
                    .HasForeignKey(d => d.AdminId)
                    .HasConstraintName("FK__Approval__admin___49C3F6B7");

                entity.HasOne(d => d.Loan)
                    .WithMany(p => p.Approvals)
                    .HasForeignKey(d => d.LoanId)
                    .HasConstraintName("FK__Approval__loan_i__48CFD27E");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Approvals)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Approval__user_i__46E78A0C");

                entity.HasOne(d => d.Vehicle)
                    .WithMany(p => p.Approvals)
                    .HasForeignKey(d => d.VehicleId)
                    .HasConstraintName("FK__Approval__vehicl__47DBAE45");
            });

            modelBuilder.Entity<Document>(entity =>
            {
                entity.HasKey(e => e.DocumentsId)
                    .HasName("PK__Document__A0F01DE16D712676");

                entity.Property(e => e.DocumentsId).HasColumnName("Documents_Id");

                entity.Property(e => e.AadharCard)
                    .HasMaxLength(255)
                    .HasColumnName("aadhar_card");

                entity.Property(e => e.PanCard)
                    .HasMaxLength(255)
                    .HasColumnName("pan_card");

                entity.Property(e => e.Photo)
                    .HasMaxLength(255)
                    .HasColumnName("photo");

                entity.Property(e => e.SalarySlip)
                    .HasMaxLength(255)
                    .HasColumnName("salary_slip");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Documents)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Documents__user___4BAC3F29");
            });

            modelBuilder.Entity<EmploymentDetail>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Employment_details");

                entity.Property(e => e.AnnualSalary).HasColumnName("annual_salary");

                entity.Property(e => e.Emi).HasColumnName("emi");

                entity.Property(e => e.EmployementType)
                    .HasMaxLength(50)
                    .HasColumnName("employement_type");

                entity.Property(e => e.OtherIncome).HasColumnName("other_income");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Employmen__user___3A81B327");
            });

            modelBuilder.Entity<LoanDetail>(entity =>
            {
                entity.HasKey(e => e.LoanId)
                    .HasName("PK__Loan_det__A1F795548C9A5C95");

                entity.ToTable("Loan_details");

                entity.Property(e => e.LoanId).HasColumnName("loan_id");

                entity.Property(e => e.EndDate)
                    .HasColumnType("date")
                    .HasColumnName("end_date");

                entity.Property(e => e.LoanAmount).HasColumnName("loan_amount");

                entity.Property(e => e.LoanTenure).HasColumnName("loan_tenure");

                entity.Property(e => e.MonthlyEmi).HasColumnName("monthly_emi");

                entity.Property(e => e.RateOfInterest)
                    .HasColumnType("decimal(18, 0)")
                    .HasColumnName("rate_of_interest");

                entity.Property(e => e.StartDate)
                    .HasColumnType("date")
                    .HasColumnName("start_date");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.VehicleId).HasColumnName("vehicle_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.LoanDetails)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Loan_deta__user___4316F928");

                entity.HasOne(d => d.Vehicle)
                    .WithMany(p => p.LoanDetails)
                    .HasForeignKey(d => d.VehicleId)
                    .HasConstraintName("FK__Loan_deta__vehic__440B1D61");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.Email, "UQ__Users__A9D10534CE736AFA")
                    .IsUnique();

                entity.HasIndex(e => e.MobileNo, "UQ__Users__D7B19EFA07032F1C")
                    .IsUnique();

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .HasColumnName("address");

                entity.Property(e => e.Age).HasColumnName("age");

                entity.Property(e => e.City)
                    .HasMaxLength(50)
                    .HasColumnName("city");

                entity.Property(e => e.Email).HasMaxLength(100);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .HasColumnName("first_name");

                entity.Property(e => e.Gender)
                    .HasMaxLength(20)
                    .HasColumnName("gender");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .HasColumnName("last_name");

                entity.Property(e => e.MobileNo).HasColumnName("mobile_no");

                entity.Property(e => e.Password)
                    .HasMaxLength(100)
                    .HasColumnName("password");

                entity.Property(e => e.Pincode).HasColumnName("pincode");

                entity.Property(e => e.State)
                    .HasMaxLength(50)
                    .HasColumnName("state");
            });

            modelBuilder.Entity<VehicleDetail>(entity =>
            {
                entity.HasKey(e => e.VehicleId)
                    .HasName("PK__Vehicle___F2947BC1C1E740D8");

                entity.ToTable("Vehicle_details");

                entity.Property(e => e.VehicleId).HasColumnName("vehicle_id");

                entity.Property(e => e.ExshowroomPrice).HasColumnName("exshowroom_price");

                entity.Property(e => e.Manufacturer)
                    .HasMaxLength(50)
                    .HasColumnName("manufacturer");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.VehicleModel)
                    .HasMaxLength(30)
                    .HasColumnName("vehicle_model");

                entity.Property(e => e.VehicleType)
                    .HasMaxLength(30)
                    .HasColumnName("vehicle_type");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.VehicleDetails)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Vehicle_d__user___3C69FB99");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
