# Write your MySQL query statement below
SELECT C1.name AS Customers
FROM Customers C1
LEFT JOIN Orders O1
ON O1.customerId = C1.id
WHERE O1.id is null
