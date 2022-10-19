-- COMPOSITE KEY
    -- A composite key is sql can be defined as a combination of multiple column used to identify all 
    -- rows that are invoked uniquely.

    -- Single column cant identify any row uniquely, a combination of over one column can uniquely 
    -- identify any record.

    -- In otherword,the combination key can also be describe as a primary key that is being created by 
    -- using multiple column.

    -- you can give maximum 16 column in composite key.

    -- Datatype of all the column in a composite key can different.
    
-- SYNTAX
    -- constraint pk_table_name primary key(col1,col2,....,col16)

-- EXAMPLE
create table mybag(
    color varchar(30),
    compartment int,
    capacity varchar(30),
    constraint pk_mybag primary key(color,compartment,capacity)
);

insert into mybag values('R',4,'30L');
insert into mybag values('G',4,'30L');
insert into mybag values('B',4,'25L');
insert into mybag values('B',4,'25L');

select * from mybag;