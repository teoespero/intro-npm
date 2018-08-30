// Teo Espero
// BS Cloud and Systems Administration
// Western Governors University
// #Web-Dev-Bootcamp-Udemy

// main code

// get the package we need
var products = require("faker");
var cats = require("cat-me");

// create a spot to store our products
var items = [];

// greet the user
console.log(cats());
console.log("=======================");
console.log("Welcome to my Bazaar!!!");
console.log("=======================");

// initialize our products list

for (var looper = 0; looper < 10; looper++){
     items.push(products.commerce.productName() + " : $" + products.commerce.price());
}

// for some reason, we might want to have the items sorted
items.sort();

// display the items on inventory
items.forEach(function(element){
   console.log(element);
});