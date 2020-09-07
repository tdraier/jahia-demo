create database testdb;
CREATE USER admin WITH PASSWORD 'admin';
GRANT ALL PRIVILEGES ON DATABASE "testdb" to admin;
create table ma_table (monid serial primary key, nom varchar(50));
