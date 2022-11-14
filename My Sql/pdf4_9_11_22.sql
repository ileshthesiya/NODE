-- select * from sales_order_details;
-- select * from product_master;
-- select * from client_master;
-- select * from sales_order;
-- select * from salesman_master;

-- ===========================================QUERYS============================================

-- * GROUP BY CLAUSES:=

-- 1.A := print the description and total qty sold for each products 

-- select a.productno,a.description,sum(b.qtyordered)
-- from product_master a, sales_order_details b
-- where a.productno=b.productno
-- group by b.productno;

-- 1.B find the value of each  product sold 

-- select a.productno,a.description,sum(b.qtydisp)
-- from product_master a, sales_order_details b
-- where a.productno=b.productno
-- group by b.productno;

-- 1.C caluclate the average qty sold for each client that has a maximum order value of 15000.00

-- select c.clientno,c.name,avg(sod.qtydisp) as " avg_sales"
-- from client_master c, sales_order so , sales_order_details sod          
-- where c.clientno = so.clientno and so.orderno = sod.orderno
-- group by c.clientno
-- having max(sod.qtyordered*sod.productrate)>15000;

-- 1.d find out total of all the billed orders for the months of june.

-- select a.orderdate ,sum(b.qtyordered)
-- from sales_order_details b , sales_order a 
-- where a.orderno=b.orderno
-- group by a.orderdate
-- having DATE_FORMAT(a.orderdate,"%m")=6;

-- =======================================================================================================

-- * JOIN AND CORRECTIONS

-- 2.A FIND OUT THE PRODUCTS,WHICH HAVE BEEN SOLD TO 'IVAN BAYROSS'

-- select a.name, c.orderno,d.productno,d.description
-- from client_master a, sales_order_details c,product_master d,sales_order b
-- where a.clientno = b.clientno
-- and b.orderno=c.orderno
-- and c.productno= d.productno
-- and a.name='ivan';

-- 2.B FIND OUT THE PRODUCTS AND THIER QUANTITIES THAT WILL HAVE TO BE DELIVERD IN THE CURRENT MONTH 

-- select  a.orderdate , a.DELYDATE , b.qtyordered , c.productno , c.description
-- from sales_order a , sales_order_details b , product_master c , client_master cm 
-- where cm.clientno = a.clientno
-- and a.orderno= b.orderno
-- and b.productno = c.productno
-- and DATE_FORMAT(a.orderdate,'%m')=DATE_FORMAT(a.DELYDATE,'%m');

-- 2.C LIST THE PRODUCTNO AND description OF CONSTANTLY SOLD (I.E. RAPIDLY MOVING) products.

-- select  p.productno,p.description,sum(sod.qtyordered) 
--     from product_master p,sales_order_details sod 
--     where p.productno=sod.productno 
--     group by p.productno 
--     order by sum(sod.qtyordered) desc limit 1;

-- 2.D FIND THE NAME OF CLIENTS WHO HAVE PURCHED trousers.

-- select d.name 
-- from sales_order_details b,sales_order c,client_master d,product_master a 
-- where a.description='trousers' 
-- and c.orderstatus!='cancelled' 
-- and c.orderno=b.orderno 
-- and b.productno=a.productno 
-- and c.clientno=d.clientno

-- 2.E LIST THE PRODUCT AND ORDERS FROM CUSTOMERS WHO HAVE ORDER LESS THAN 5 UNITS OF 'PULL OVERS'.

-- select pm.description , sod.qtyordered
-- from product_master pm , sales_order_details sod
-- where pm.productno= sod.productno
-- and sod.qtyordered<5;

-- 2.F FIND THE PRODUCTS AND THIER QUANTITIES FOR THE ORDER PLACED BY 'IVAN' AND 'BASU'.

-- select pm.description, cm.name, sum(sod.qtyordered)
-- from product_master pm, client_master cm, sales_order_details sod ,  sales_order sd
-- where cm.clientno=sd.clientno
-- and sd.orderno=sod.orderno
-- and sod.productno=pm.productno
-- and (cm.name='ivan' or cm.name='basu')
-- group by pm.description;


-- 2.G FIND THE PRODUCTS AND THIER QUANTITIES FOR THE ORDER PLACED BY 'C00001' AND 'C00003'.

-- select pm.description, cm.clientno, sum(sod.qtyordered)
-- from product_master pm, client_master cm, sales_order_details sod ,  sales_order sd
-- where cm.clientno=sd.clientno
-- and sd.orderno=sod.orderno
-- and sod.productno=pm.productno
-- and (cm.clientno='C00001' or  cm.clientno="C00003")
-- group by pm.description;

-- ===================================================================================================================
-- ===================================================================================================================

                                  -- ***************SUB_QUERIES*****************


-- 3.A FIND THE PRODUCTNO AND description OF NON-MOVING PRODUCTS I.E. PRODUCTS NOT BEING SOLD

-- select productno ,description
--     from product_master
--     where productno not in (
--         select productno from sales_order_details);

-- 3.B LIST THE CUSTOMER NAME, Address1, Address2, CITY AND PINCODE FOR THE CLIENT WHO HAS PLACED ORDERNO 'O19001'.

-- select name,address1,Address2,city,pincode
-- from client_master
-- where clientno=(select clientno from sales_order
-- where orderno='O19001');

-- 3.C LIST THE CLIENT NAMES THAT HAVE PLACED ORDERS BEFORE THE MONTH OF MAY'04

-- select name 
-- from client_master
-- where clientno in(select clientno from sales_order
-- where orderdate<'2004-05-01');

-- 3.D LIST THE PRODUCT 'MOUSE' HAS BEEN ORDERED BY ANY CLIENT AND PRINT THE CLIENT_NO , NAME TO WHOM IT WAS SOLD.

-- select name , clientno
-- from client_master
-- where clientno in(select clientno from sales_order
-- where orderno in( select orderno from sales_order_details
-- where productno in(select productno from product_master
-- where description ='mouse')));

-- 3.E LIST THE NAMES OF CLIENTS WHO HAVE PLACED ORDERS WORTH RS.10000 OR MORE.

-- select name 
-- from client_master
-- where clientno in(select clientno from sales_order
-- where orderno in(select orderno from sales_order_details
-- where (qtyordered * productrate)>=10000));

