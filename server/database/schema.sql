DROP DATABASE IF EXISTS WEBDASH;
CREATE DATABASE WEBDASH;

\c webdash;

DROP TABLE IF EXISTS userinfo;
DROP TABLE IF EXISTS posts


CREATE TABLE userinfo(
    id serial PRIMARY KEY,
    username varchar(60) not null,
    hashedpassword varchar(255) not null,
    email varchar(60) not null,
    userlevel varchar not null,
    sessionID varchar(255)
);

CREATE TABLE posts(
    id serial PRIMARY KEY,
    title varchar(60) not null,
    body varchar(65535),
    photos json,
    datecreated varchar(255),
    userId int not null,
    CONSTRAINT userId FOREIGN KEY(userId) REFERENCES userInfo(id) ON DELETE SET null
);

COPY posts(title, body, photos, datecreated, userId)
FROM '/Users/theo/Desktop/webdsh/web-dsh/server/database/posts.csv'
DELIMITER ','
CSV HEADER;
/*
post under what language
user can follow specific languages and get that
programming languages filter

*/