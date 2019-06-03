# Database Queries

## find all customers that live in London. Returns 6 records.
SELECT CustomerID, CustomerName, City FROM Customers
where city = 'London'

## find all customers with postal code 1010. Returns 3 customers.
SELECT * FROM Customers
WHERE PostalCode = '1010'

## find the phone number for the supplier with the id 11. Should be (010) 9984510.
SELECT SupplierId, Phone FROM Suppliers
where SupplierID = '11'

## list orders descending by the order date. The order with date 1997-02-12 should be at the top.
SELECT * from Orders
order by OrderDate desc

## find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name. Returns 11 records.
-- SELECT * from Suppliers
SELECT SupplierName from Suppliers 
WHERE LENGTH(SupplierName) > 20

## find all customers that include the word "market" in the name. Should return 4 records.
-- SELECT * from Customers
SELECT CustomerName from Customers 
WHERE CustomerName like '%market%'

## add a customer record for _"The Dollywood"_, the contact name is _"Dolly Parton"_ the address is _"1 Dumplin Lane"_ in _"Tennessee Hills"_, postal code _"111"_ and the country is _"Love Wins"_.
INSERT INTO CUSTOMERS (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('The Dollywood', 'Dolly Parton', '1 Dumplin Lane', 'Tennessee Hills', '111','Love Wins')

## update _The Dollywood_ record so that the postal code changes to _"11122"_.
UPDATE Customers 
SET PostalCode = 11122
WHERE CustomerId = 92

## STRETCH PROBLEMS START HERE ##

## list orders grouped by customer showing the number of orders per customer. _Rattlesnake Canyon Grocery_ should have 7 orders.
SELECT CustomerName, COUNT(Orders.CustomerID) AS TotalOrderQuantity 
FROM Customers join Orders on (Orders.CustomerID = Customers.CustomerID)
group by Orders.CustomerID

## list customers names and the number of orders per customer. Sort the list by number of orders in descending order. _Ernst Handel_ should be at the top with 10 orders followed by _QUICK-Stop_, _Rattlesnake Canyon Grocery_ and _Wartian Herkku_ with 7 orders each.
SELECT CustomerName, COUNT(Orders.CustomerID) AS TotalOrderQuantity 
FROM Customers join Orders on (Orders.CustomerID = Customers.CustomerID)
GROUP BY Orders.CustomerID
ORDER BY TotalOrderQuantity desc

## list orders grouped by customer's city showing number of orders per city. Returns 58 Records with _Aachen_ showing 2 orders and _Albuquerque_ showing 7 orders.

## delete all users that have no orders. Should delete 17 (or 18 if you haven't deleted the record added) records.
