postman urls 

getCustomers:   localhost:3000/customer?sort=username
getCustomer:    localhost:3000/customer/23
addCustomer:    localhost:3000/customer
updateCustomer: localhost:3000/customer/10
deleteCustomer: localhost:3000/customer/33


Sorting : 
// Clients can make GET requests like:

// /customers?sort=name to sort by name in ascending order.
// /customers?sort=nameDesc to sort by name in descending order.
// /customers?sort=email to sort by email in ascending order.
// /customers?sort=emailDesc to sort by email in descending order.
// /customers?sort=username to sort by username in ascending order.
// /customers?sort=usernameDesc to sort by username in descending order.