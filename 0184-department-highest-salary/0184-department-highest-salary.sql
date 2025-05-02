SELECT D1.name AS Department, E1.name AS Employee, E1.salary as Salary
FROM Employee E1 
JOIN Department D1
ON E1.departmentId = D1.id
WHERE (E1.departmentId, E1.salary) IN
(SELECT departmentId, max(salary) as max FROM Employee GROUP BY departmentId)
