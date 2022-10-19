-- create table client_master(
--     Clientno varchar(50),
--     Name varchar(50),
--     Address1 varchar(30),
--     Address2 varchar(30),
--     city varchar(50), 
--     pincode numeric(38),
--     state varchar(50),
--     baldue numeric(38),
--     constraint pk_client_master primary key(Clientno)
-- );

-- insert into client_master values('C00001', 'Ivan','A/1 Bandra', 'B/1 Vesu', 'Bombay', 400054, 'Maharashtra', 15000);
-- insert into client_master values('C00002', 'Vandana','A/2 Bandra', 'B/2 Vesu', 'Madras', 780001, 'Tamilnadu', 0);
-- insert into client_master values('C00003', 'Pramada','A/3 Bandra', 'B/3 Vesu', 'Bombay', 400057, 'Maharashtra', 5000);
-- insert into client_master values('C00004', 'Basu','A/4 Bandra', 'B/4 Vesu',  'Bombay', 400056, 'Maharashtra', 0);
-- insert into client_master values('C00005', 'Ravi','A/5 Bandra','B/5 Vesu', 'Delhi', 100001, '', 2000);
-- insert into client_master values('C00006', 'Rukmini','A/5 Bandra','B/5 Vesu', 'Bombay', 400050, 'Maharashtra', 0);


-- create table product_master(
--     productno varchar(50),
--     description varchar(50),
--     profitepercent numeric(38,2),
--     unitemeasured varchar(50),
--     qtyonhand numeric(38),
--     recorderlvl numeric(38),
--     sellprice numeric(38),
--     costprice numeric(38),
--     constraint pk_product_master primary key(productno)
-- );

-- insert into product_master values ('P00001','1.44floppies',5, 'piece', 100, 20, 525,500); 
-- insert into product_master values ('P03453', 'Monitors', 6, 'piece', 10, 3, 12000, 11200); 
-- insert into product_master values ('P06734', 'Mouse',5, 'piece', 20, 5, 1050, 500); 
-- insert into product_master values ('P07865', '1.22 floppies',5, 'piece', 100, 20, 525, 500); 
-- insert into product_master values ('P07868', 'Keyboards', 2, 'piece', 10, 3, 3150, 3050); 
-- insert into product_master values ('P07885', 'CD Drive',2.50, 'piece',10,3,5250,5100); 
-- insert into product_master values ('P07965', '540 HDD',4, 'piece',10,3,8400, 8000); 
-- insert into product_master values ('P07975', '1.44 Drive',5, 'piece', 10, 3, 1050, 1000); 
-- insert into product_master values ('P08865', '1.22 Drive',5, 'piece',2,3, 1050, 1000);
  
    


-- create table salesman_master( 
--     salesman_no varchar(50), 
--     salesmanname varchar(50), 
--     address1 varchar(50),
--     address2 varchar(50), 
--     city varchar(50), 
--     pincode numeric(38),
--     state varchar(50), 
--     salamt numeric(38),
--     tgttoget numeric(38),
--     ytdsale numeric(38),
--     remark varchar(50),
--     constraint pk_salesman_master primary key(salesman_no)
-- );

-- insert into salesman_master values('S00001', 'Kiran', 'A/14 worli', 'A/5 Juhu' ,'Bombay', 400002, 'Mah', 3000, 100, 50, 'Good'); 
-- insert into salesman_master values ('S00002', 'Manish', '65, nariman','P-7 Bandra', 'Bombay',400001, 'Mah', 3000, 200, 100, 'Good'); 
-- insert into salesman_master values ('S00003', 'Ravi', 'P-7 Bandra','65, nariman', 'Bombay', 400032, 'Mah', 3000, 200, 100, 'Good'); 
-- insert into salesman_master values ('S00004', 'Ashish', 'A/5 Juhu','A/14 worli', 'Bombay', 400044, 'Mah', 3500, 200, 150, 'Good');

-- create table sales_order(
--     orderno varchar(6),
--     clientno varchar(6),
--     orderdate date,
--     deltaddr varchar(25),
--     salesman_no varchar(6),
--     delytype char(10),
--     billyn char(10),
--     delydate date,
--     orderstatus varchar(10),
--     constraint pk_sales_order primary key(orderno),
--     constraint fk_sales_order foreign key(clientno) references client_master(clientno),
--     constraint fk_sales_order1 foreign key(salesman_no) references salesman_master(salesman_no)
-- );

-- insert into sales_order values("O19001","C00001",'2004-06-12',"Daisar","S00001", "f","n",'2002-07-20',"in process");
-- insert into sales_order values("O19002","C00002",'2004-06-25',"Borivali","S00002", "p","n",'2002-06-27',"cancelled");
-- insert into sales_order values("O46865","C00003",'2004-02-18',"Malad","S00003", "f","y",'2002-02-20',"fulfilled");
-- insert into sales_order values("O19003","C00001",'2004-04-03',"Filmcity","S00001", "f","y",'2002-04-07',"fulfilled");
-- insert into sales_order values("O46866","C00004",'2004-05-20',"Bandra","S00002", "p","n",'2002-05-22',"cancelled");
-- insert into sales_order values("O19008","C00005",'2004-05-24',"Riverfront","S00004", "f","n",'2002-07-26',"in process");

-- create table sales_order_details(
--     orderno varchar(6),
--     productno varchar(6),
--     qtyordered numeric(8),
--     qtydisp numeric(8),
--     productrate numeric(10),
--     constraint fk_sales_order_details foreign key(orderno) references sales_order(orderno),
--     constraint fk_sales_order_details1 foreign key(productno) references product_master(productno)
-- );

-- insert into sales_order_details values('O19001', 'P00001', 4, 4, 525);
-- insert into sales_order_details values('O19001', 'P07965', 2, 1, 8400);
-- insert into sales_order_details values('O19001', 'P07885', 2, 1, 5250);
-- insert into sales_order_details values('O19002', 'P00001', 10, 0, 525);
-- insert into sales_order_details values('O46865', 'P07868', 3, 3, 3150);
-- insert into sales_order_details values('O46865', 'P07885', 3, 1, 5250);
-- insert into sales_order_details values('O46865', 'P00001', 10, 10, 525);
-- insert into sales_order_details values('O46865', 'P0345', 4, 4, 1050);
-- insert into sales_order_details values('O19003', 'P03453', 2, 2, 1050);
-- insert into sales_order_details values('O19003', 'P06734', 1, 1, 12000);
-- insert into sales_order_details values('O46866', 'P07965', 1, 0, 8400);
-- insert into sales_order_details values('O46866', 'P07975', 1, 0, 1050);
-- insert into sales_order_details values('O19008', 'P00001', 10, 5, 525);
-- insert into sales_order_details values('O19008', 'P07975', 5, 3, 1050);