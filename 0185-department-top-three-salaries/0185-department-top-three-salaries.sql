# Write your MySQL query statement below
WITH CTE AS (
    SELECT id, name,salary, departmentId,
        DENSE_RANK() OVER(PARTITION BY departmentId ORDER BY salary DESC) AS "rank" 
    FROM Employee
)

SELECT D1.name as Department, C1.name as Employee, C1.salary as Salary FROM CTE C1 
JOIN Department D1
ON C1.departmentId = D1.id
WHERE C1.rank <= 3 