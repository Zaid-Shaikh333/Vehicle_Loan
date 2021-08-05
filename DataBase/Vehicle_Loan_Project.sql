create database Vehicle_Loan
use Vehicle_Loan
/* USERS TABLE*/
create table Users(user_id int identity(1,1) primary key,first_name nvarchar(50),
last_name nvarchar(50),age int,gender nvarchar(20),mobile_no bigint unique,Email nvarchar(100) unique
,password nvarchar(100),address nvarchar(255),city nvarchar(50),state nvarchar(50),pincode int)

/*EMPLOYMENT_DETAILS TABLE */

Create table Employment_details(user_id int references Users(user_id),
employement_type nvarchar(50), annual_salary bigint, emi bigint,other_income bigint )

/* VEHICLE DETAILS TABLE*/
create table Vehicle_details(user_id int references Users(user_id),manufacturer nvarchar(50),vehicle_type nvarchar(30),
vehicle_model nvarchar(30),exshowroom_price bigint)

alter table Vehicle_details add vehicle_id int identity(1,1) primary key
---sp_help Vehicle_details

/* ADMIN TABLE*/
create table Admin(admin_id int identity(1,1) primary key,Email nvarchar(100) unique,
password nvarchar(100))

-----------/*LOAN MODULE*/---------

/*LOAN TABLE*/
create table Loan_details(loan_id int identity(1,1) primary key,user_id int references Users(user_id),
vehicle_id int references Vehicle_details(vehicle_id),loan_amount bigint,loan_tenure int, start_date date,
end_date date,rate_of_interest decimal , monthly_emi bigint)

/*APPROVAL TABLE*/
create table Approval(application_id int identity(1,1) primary key, user_id int references Users(user_id),
vehicle_id int references Vehicle_details(vehicle_id),loan_id int references Loan_details(loan_id),
admin_id int references Admin(admin_id),status nvarchar(30),description nvarchar(255))

/*DOCUMENT TABLE*/
-----------------------------------------------------------------------------------------------------

insert into Users(first_name ,last_name,age,gender ,mobile_no,Email
,password ,address,city ,state ,pincode) values ('Paridhi','Gupta',22,'Female',
7888545862,'paridhi.gupta@gmail.com','pari@21','Flat no-802 Navi Mumbai','Mumbai','Maharashtra',410210)

insert into Users(first_name ,last_name,age,gender ,mobile_no,Email
,password ,address,city ,state ,pincode) values ('Zaid','Shaikh',22,'Male',
7888546567,'zaidshaikh@gmail.com','zaid123','Flat no-101 Vashi','Mumbai','Maharashtra',423863)

insert into Admin(Email,password) values ('anita1234@gmail.com','anita234'),('mayank.123@gmail.com','mayank123')

select * from Users
insert into Employment_details(user_id,
employement_type, annual_salary, emi,other_income) values(1,'Fulltime',500000,0,200000),(2,'Self employed',1000000,20000,100000)
select * from Employment_details

insert into Vehicle_details(user_id,manufacturer ,vehicle_type ,
vehicle_model,exshowroom_price) values(1,'Hyundai','4 wheeler','Creta',1500000),(2,'Ola','2 wheeler','Eve',80000)

select * from Vehicle_details

insert into Loan_details(user_id,
vehicle_id,loan_amount,loan_tenure , start_date ,
end_date,rate_of_interest , monthly_emi) values(1,1,1200000,60,'2021-08-06','2026-08-06',11,26091),(2,2,60000,12,'2021-08-15','2022-08-15',9,5247)

select * from Loan_details

insert into Approval( user_id,
vehicle_id,loan_id,
admin_id,status ,description) values (1,1,1,1,'Approved','Meets all criteria'),(2,2,2,2,'Approved','Meets all criteria')
select * from Approval

/* Document Table */
create table Documents(user_id int references Users(user_id),aadhar_card nvarchar(255),
pan_card nvarchar(255),salary_slip nvarchar(255),photo nvarchar(255))







