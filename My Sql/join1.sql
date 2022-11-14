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
-- ======================================================================
-- Inner join

-- select *
-- from products
-- inner join manufacturers
-- on manufacturers.code=products.manufacturer;

-- =========================================================================
-- left join

-- select *
-- from products
-- left join manufacturers
-- on manufacturers.code=products.manufacturer;


-- ===========================================================================
-- right join

-- select *
-- from products
-- right join manufacturers
-- on manufacturers.code=products.manufacturer;


-- ===========================================================================
-- cross join
-- select *
-- from products
-- cross join manufacturers;
