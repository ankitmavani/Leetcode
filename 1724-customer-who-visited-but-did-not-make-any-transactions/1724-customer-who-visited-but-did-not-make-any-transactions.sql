# Write your MySQL query statement below
SELECT V.customer_id, COUNT(*) as count_no_trans
FROM Visits as V 
LEFT JOIN Transactions AS TRAN
ON V.visit_id=TRAN.visit_id
WHERE TRAN.transaction_id IS NULL
GROUP BY V.customer_id
