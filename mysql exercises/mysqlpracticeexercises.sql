#day exercises on mysql select statement 
SELECT * FROM movies;
SELECT Title from movies;
SELECT Director from movies;
SELECT title , Director  from movies;
SELECT title , year FROM movies;

#queries exercises on constraint
SELECT * FROM movies;
select id ,  title from movies where id=6;
select title from movies where year>2000 AND year<2010;
select title from movies where year NOT BETWEEN 2000 AND 2010;
select title , year from (select * from movies order by year) limit 5;

#queries exercises on constraint part 2

SELECT * FROM movies;
SELECT title, director FROM movies WHERE director = "John Lasseter";
SELECT title, director FROM movies WHERE director != "John Lasseter";
SELECT * FROM movies WHERE title LIKE "WALL-_";

# queries exercises on filtering and sorting 

SELECT * FROM movies;	
select distinct(director) from movies order by director; 
select * from movies order by year desc limit 4; 
select * from movies order by title limit 5;
select * from movies order by title limit 5 offset 5;

# queries on tables with joins 
select id, title, Domestic_sales , International_sales from movies inner join Boxoffice on (movies.id= boxoffice.movie_id);
select id, title, domestic_sales, International_sales from movies inner join boxoffice on ( movies.id=boxoffice.movie_id) where International_sales>Domestic_sales;
select id , title from movies inner join boxoffice on (movies.id=boxoffice.movie_id) order by rating desc;

# queries on outer joins
select distinct building name , capacity from buildings join employees on buildings.building_name= employees.building ;
SELECT * FROM buildings;
SELECT DISTINCT building_name, role 
FROM buildings LEFT JOIN employees ON building_name = building;
