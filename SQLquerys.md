1. Get the customers who had made atleast one order
   **SELECT customer_id, customer_name FROM customers WHERE customer_id IN (SELECT customer_id FROM orders);**

2. Get the customers who had not made any orders 
   
3. GET all the customers who had made an order more than two time
   - **SELECT customer_id, customer_name FROM customers WHERE customer_id IN (SELECT customer_id FROM orders GROUP BY customer_id HAVING COUNT(*) > 2);**
  
4. Get all the customers name starts with A.
   - SELECT customer_id, customer_name FROM customers WHERE customer_name LIKE 'A%';

5. Get all the names that ends with letters 'en'
   **- SELECT customer_id, customer_name FROM customers WHERE customer_name LIKE 'end%';**

6. Get all the names that includes lettter 'b';
   ** - SELECT customer_id, customer_name FROM customers WHERE customer_name LIKE '%x%'**

7. Get all the products between price 20 - 80
   **- SELECT product_id, product_name FROM products WHERE price BETWEEN 20 AND 80;**
8. Get all the names start and end beween two product names
  *** - SELECT customer_id, customer_name FROM customers WHERE customer_name BETWEEN 'Alice' AND 'Sirop';***

9. GET data from 10 to 20
   **SELECT * FROM customers ORDER BY customer_id OFFSET 10 LIMIT 10;**

