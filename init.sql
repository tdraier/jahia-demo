--create database testdb;
--CREATE USER admin WITH PASSWORD 'admin';
GRANT ALL PRIVILEGES ON DATABASE "testdb" to admin;
DROP TABLE IF EXISTS "article";
DROP SEQUENCE IF EXISTS article_id_seq;
CREATE SEQUENCE article_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;
CREATE TABLE public.article (
    "id" integer DEFAULT nextval('article_id_seq') NOT NULL,
    "title" character varying(200) NOT NULL,
    "content" text NOT NULL,
    "userid" character varying(200) NOT NULL
) WITH (oids = false);
DROP TABLE IF EXISTS "editor";
DROP SEQUENCE IF EXISTS editor_id_seq;
CREATE SEQUENCE editor_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;
CREATE TABLE public.editor (
    "id" integer DEFAULT nextval('editor_id_seq') NOT NULL,
    "userid" character varying(200) NOT NULL,
    "role" character varying(200) NOT NULL
) WITH (oids = false);
COMMIT;
