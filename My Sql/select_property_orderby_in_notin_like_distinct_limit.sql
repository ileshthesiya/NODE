-- create table ilesh(
--     name varchar(10),
--     city varchar(10),
--     state varchar(10),
--      age numeric
--      );
--      insert into ilesh values("ilesh","surat","gujrat",19);
--      insert into ilesh values("ilesh","surat","gujrat",20);
--      insert into ilesh values("dhruv","ahmd","gujrat",20);
--      insert into ilesh values("sagar","pune","maharasht",21);
--      insert into ilesh values("raj","mumbai","maharasht",22);
--      insert into ilesh values("nency","rajkot","gujrat",23);
--      insert into ilesh values("falguni","banglore","karnatak",19);
--      insert into ilesh values("meera","chennai","madras",20);
--      insert into ilesh values("niharika","pune","maharasht",22);
--      insert into ilesh values("darshak","amritshar","punjab",26);
--      insert into ilesh values("nisha","shrinagar","jammu",18);
--      insert into ilesh values("smit","jaypur","rajshthan",17);
--      insert into ilesh values("tushar","udaipur","rajshthan",23);
--      insert into ilesh values("umesh","ambaji","gujrat",25);
--      insert into ilesh values("priya","div","gujrat",21);
--      insert into ilesh values("aarshi","daman","gujrat",45);
--      insert into ilesh values("vansikha","goa","goa",14);
--      insert into ilesh values("hiral","dadranagr","maharasht",56);
--      insert into ilesh values("khushi","aabu","rajshthan",26);
--      insert into ilesh values("jannu","aagra","delhi",62);
--      insert into ilesh values("hetshvi","gorkhpur","up",22);
--      insert into ilesh values("rushi","mirzapur","up",25);
--      insert into ilesh values("nirali","kolkata","bangal",23);
--      insert into ilesh values("happy","nasik","maharasht",5);
--      insert into ilesh values("yaju","gandhinagar","gujrat",18);
--      insert into ilesh values("priya","vapi","gujrat",21);
-- =====================================================================================================================================================

-- ==================================================================================================================================================


--      TOPIC :-- ****ORDERBY, IN, NOTIN, LIKE,DISNICT,LIMIT *****

select * from ilesh; 


-- ORDERBY
select * from ilesh order by name; -- a to z ma name print thse

select * from ilesh order by name desc; -- z to a ma name print thse



-- IN
select * from ilesh where age in(19,22); -- jeni age 19 and 22 hse ae select thse


-- NOT IN
select * from ilesh where age not in(19,22); -- jeni age 19 and 22 nai hoi ae select thse


-- LIKE
select * from ilesh where name like'a%'; -- pelo char A hse ane pa6al gme ae hse ae print thse ex aarshi

select * from ilesh where name like'%a';  -- last char A hse agal gme ae hse print thse   ex priya

select * from ilesh where name like'_a%'; -- bijo char A hse ae j print thse ex jannu

select * from ilesh where name like'%a_'; -- last thi bijo char A hse ae j print thse ex hiral

select * from ilesh where name like'%a%'; -- gme tya A hovo joyie ex ilesh,happy,nisha

select * from ilesh where name like'a__'; -- total 7 char ane 2 jo A hse ae select thse ex darshak

select * from ilesh where name like'__'; -- total 6 char hse ae j sellect thse ex tushar,nirali

select * from ilesh where name like'a'; -- empty set aavse

select * from ilesh where name like'ilesh'; -- ilesh name j aavse


-- DISNICT
select distinct state from ilesh ; -- non repet state j print kar se \\ repet thata hoi ae print nai thy

select distinct state,age from ilesh ; -- age and state bey ni colum na data same hoi pn bey ni row na data a;g hova joye ex. gujrat 19 gujrat 20


-- LIMIT
select * from ilesh limit 6 ; -- first 6 j data(row) avse