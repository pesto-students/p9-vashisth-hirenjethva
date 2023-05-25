/* Created a database */
create database Warehouse;

/* using a database */
use Warehouse;

/* Creating tables based on requirements */
create table CITIES(CITY_ID int primary key auto_increment not null, CITY CHAR(20),STATE CHAR(20));

create table WAREHOUSES(WID INTEGER primary key auto_increment not null,WNAME CHAR(30),LOCATION CHAR(20),EXTRA_CONTEXT json);

create table STORES(SID INTEGER primary key auto_increment not null,STORE_NAME CHAR(20), LOCATION_CITY CHAR(20));

create table CUSTOMER(CNO INTEGER primary key auto_increment not null, CNAME CHAR(50),ADDR VARCHAR(50),CU_CITY CHAR(20));

create table ORDERS(ONO INT primary key auto_increment not null,ODATE DATE);

create table ITEMS(ITEMNO int primary key auto_increment not null,DESCRIPTION TEXT,WEIGHT DECIMAL(5,2), COST DECIMAL(5,2));

/* alter the table based on relations */
alter table WAREHOUSES add CITY_ID int;

alter table ORDERS ADD CNO int;
alter table ORDERS ADD ITEMNO int;

ALTER TABLE STORES ADD WID INT;