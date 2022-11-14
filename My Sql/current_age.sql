-- create table students(
--     studentsname varchar(50),
--     mobile_no numeric,
--     date_of_birth date

-- );

-- insert into students values ("keval satani",8469540818,"2002-09-30");
-- insert into students values("ilesh lathiya",7064155225,"2001-11-02");
-- insert into students values("kunal ramoliya",6363541522,"2002-06-01");

alter table students add age varchar(50);

select date_format(from_days(datediff(now(),date_of_birth)),"%y year %m month %d day") from students;

update students set age=date_format(from_days(datediff(now(),date_of_birth)),"%y year %m month %d day");