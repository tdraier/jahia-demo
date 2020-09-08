--create database testdb;
--CREATE USER admin WITH PASSWORD 'admin';
GRANT ALL PRIVILEGES ON DATABASE "testdb" to admin;
DROP TABLE IF EXISTS "article";
CREATE TABLE public.article (
    "id" serial primary key,
    "title" character varying(200) NOT NULL,
    "content" text NOT NULL,
    "user_id" character varying(200) NOT NULL
) WITH (oids = false);
DROP TABLE IF EXISTS "editor";
CREATE TABLE public.editor (
    "id" serial primary key,
    "user_id" character varying(200) NOT NULL,
    "role" character varying(200) NOT NULL
) WITH (oids = false);
COMMIT;
