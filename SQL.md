- SQL COMMANDS

->EXTRACT = To extract values from dates like day month or year

---------------------------------------------------------------------

->LIKE = To select name starts a character or multiple characters(Case Sensitive)

->%X% = Contains(Returns all the names that contains letter X)

->LIKE '%en' = Returns all the customers where name ends in en

-> _ Wildcard = ('L_nd__') - Gives London and Lander , ('L_nd_n') - Gives London Only

---------------------------------------------------------------------
         
->ILIKE = Same as LIKE but not Case Sensitive

->AND = To combine multiple conditions(both true)

->OR = To combine multiple consitions (only one need to be true)

->IN = Selects the values present in a list

->SELECT * FROM customers WHERE customer_id IN (SELECT customer_id FROM orders) = Gives all the customers who made a order

->NOT IN = Gives the Result Opposite of IN

--------------------------------------
->BETWEEN = To select values in a range. We can use Alphabets also just like numbers also date values.

--------------------------------------  

->IS NULL = To check if a column value is null 

->NOT = We can use this to get the opposite of the true

->SELECT = To Select fields from Database

->DISTINCT = To get distinct values (Duplicate elements won't be there)

->COUNT(DISTINCT city) = Gives the count of distinct values in city field

->WHERE = Is used to filter documents

->ORDER BY = Sortes the result in ascending order by default.DESC for sorting in decending.

->LIMIT = To limit the result upto a value

->OFFSET = Specifys where to start selecting from

->MIN = To get a MIN value from the column of table

->MAX = To get MAX value from column of table

->AS = This is a special tag which is used to provide alias(make as a new table) for a result table.

->COUNT = To get the tottal count(Returns the number of rows)

->SUM = To get the total sum of a column

->AVG = To get the average of a column in table

->::NUMERIC(10,2) = 28.8663636363636364 this to 28.86 this

-------------------------------------

-> Alias = Used to give names for tables. It is temporary only. AS keyword is used to name the Table.

|| = To concantinate two fields. (|| ' -> ' || we can decorate it like this also)






