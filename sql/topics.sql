drop table if exists topics;
create table topics (
  id serial primary key,
  topic varchar(255),
  img_url varchar(255),
  description varchar(255)
); 

drop table if exists users;
create table users (
  id serial primary key,
  name varchar(255),
  email_address varchar(255),
  password_hash varchar(255),
  created_at timestamp,
  updated_at timestamp,
  gender varchar(255),
  age int,
  location varchar(255),
  picture_url varchar(255)
);

drop table if exists entries;
create table entries (
  id serial primary key,
  user_id int,
  entry varchar(400),
  created_at timestamp,
  updated_at timestamp
);

drop table if exists friends;
create table friends (
  id serial primary key,
  current_user_id int,
  friend_id int,
  top_four boolean
);

drop table if exists activity;
create table activity (
  id serial primary key,
  user_id int,
  action varchar(255),
  description varchar(255)
);

