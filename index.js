var customerName = 'bob';
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
function setBestCustomer() {
  bestCustomer = 'not bob'; // Declaring a global variable from inside a function
}
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value';  
}

