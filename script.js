//Quick Exercise
//Write a program to calculate the discounted price of an item after tax.

//Requirements:
//1. Declare a variable price and set it to 200.
let ogPrice = 200;
//2. Declare variables discountRate (15%) and taxRate (8%).
let discountRate = 0.15;
let taxRate = 0.08;
//3. Calculate the discount and apply it to the price.
let totalDiscount = ogPrice * discountRate;
let discountedPrice = ogPrice - totalDiscount;
//4. Add the tax to the discounted price.
let totalTax = discountedPrice * taxRate;
let finalPrice = discountedPrice + totalTax;
//5. Log the breakdown in the following format:
console.log(`Original Price: $${ogPrice.toFixed(2)}, Discount: $${totalDiscount.toFixed(2)}, Tax: $${totalTax.toFixed(2)}, Final Price: $${finalPrice.toFixed(2)}`);
