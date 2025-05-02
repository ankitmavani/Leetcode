SELECT DISTINCT A.num AS ConsecutiveNums 
FROM Logs A
JOIN Logs B
ON A.id = B.id+1 AND A.num = B.num
JOIN Logs C
ON A.id = C.id+2 AND A.num = C.num 