-- use ilesh database

-- create table manufacturers(
--     code int, 
--     name varchar(100),
--     constraint pk_manufacturers primary key (code)
--     );

-- insert into manufacturers values(1, 'Sony') ;
-- insert into manufacturers values(2, 'Creative Labs');
-- insert into manufacturers values(3, 'Hewlett-Packard') ;
-- insert into manufacturers values(4, 'Iomega' ) ;
-- insert into manufacturers values(5, 'Fujitsu');
-- insert into manufacturers values(6, 'Winchester');


-- create table products(
--     code int, 
--     name varchar(100), 
--     price int,
--     manufacturer int,   
--     constraint pk_products primary key (code), 
--     constraint fk_products foreign key (manufacturer) references manufacturers(code)
--     );

-- INSERT into products values(1, 'Hard drive',240,5) ;
-- INSERT into products values(2, 'Memory',120,6) ;
-- INSERT into products values(3, 'ZIP drive', 150,4) ;
-- INSERT into products values(4, 'Floppy disk',5,6) ;
-- INSERT into products values(5, 'Monitor',240,1) ;
-- INSERT into products values(6, 'DVD drive',180,2) ;
-- INSERT into products values(7, 'CD drive', 90,2) ;
-- INSERT into products values(8, 'Printer', 270,3) ;
-- INSERT into products values(9, 'Toner cartridge' ,66,3) ;
-- INSERT into products values(10, 'DVD burner', 180,2);

-- select * from manufacturers;

-- select * from products;

-- ========================================================
-- 1.
-- select name from products;

-- 2.
-- select name,price from products;

-- 3.
-- select name from products where price <= 200;

-- 4.
-- select name,price from products where price between 60 and 120;

-- 5.
-- select name, price*100 as price_in_cent from products; 

-- 6
-- select avg(price) from products;

-- 7.
-- select avg(price) from products where manufacturer = 2;

-- 8 and 9
-- select price,name from products where 180 <= price order by price desc, name asc;

-- 17.
-- insert into products values(11, 'Loudspeakers', 70, 2);

-- 18.
-- update products set name='laser printer' where code = 8;
-- Select * from products;

-- 19.
-- select name, price,price*0.10 as discount,(price-price*0.10) as discount_amt from products;
-- select * from products;

-- 20.
-- select name, price,price*0.10 as discount,(price-price*0.10) as discount_amt from products where 120 <= price;

-- Query 10 to 16

-- 10.
-- select * 
-- from products,manufacturers
-- where products.code=manufacturers.code;

-- 11.
select products.name,products.price,manufacturers.name
from products,manufacturers
where products.code=manufacturers.code;

-- 12.
-- select avg(products.price),manufacturers.code
-- from manufacturers,products
-- where manufacturers.code=products.code
-- group by manufacturers.code;

-- 13.
-- select avg(products.price),manufacturers.name
-- from manufacturers,products
-- where manufacturers.code=products.code
-- group by manufacturers.name;

-- 14.
-- select products.price,manufacturers.name
-- from manufacturers,products
-- where manufacturers.code=products.code
-- group by manufacturers.name
-- having avg(products.price)>=150;

-- 15.
-- select name,price from products order by price limit 1;

-- 16.
-- select manufacturers.name,max(products.price)
-- from manufacturers,products
-- where manufacturers.code=products.manufacturer
-- group by manufacturers.name
-- having max(price)=(select max(price) from products);



-- select * from products;
-- select * from manufacturers;

select name,price from products where code in(select code from manufacturers);