const itemData = require('./price.json');

function calculateCartPrice(cart) {
  let totalCost = 0;
  const itemCounts = {};

  for (let item of cart) {
    itemCounts[item] = (itemCounts[item] || 0) + 1;
  }

  for (let item in itemCounts) {
    const count = itemCounts[item];
    const price = itemData.prices[item];

    if (itemData.offers[item]) {
      const offer = itemData.offers[item];
      if (offer.type === "B1G1")         // offer applied for 
      { 
        const paidCount = Math.ceil(count / 2); 
        totalCost += paidCount * price;
      } 
      else if (offer.type === "3For2")
     { 
        const paidCount = Math.floor(count / 3) * 2 + (count % 3); 
        totalCost += paidCount * price;
      }
    } else {
      totalCost += count * price;
    }
  }

  return totalCost;
}

// Test cases
const testCases = [
  { cart: ["Apple", "Apple", "Banana"]},  
  { cart: ["Melon", "Melon", "Melon"]},    
  { cart: ["Lime", "Lime", "Lime", "Lime"] }, 
  { cart: ["Apple", "Banana", "Melon", "Melon", "Lime", "Lime", "Lime"]},
  { cart: ["Apple", "Banana", "Apple", "Banana", "Banana"] }
  
];

// Running test cases
testCases.forEach((testCase, index) => {
  const { cart} = testCase;
  const result = calculateCartPrice(cart);
  console.log(`Cart ${index + 1}: cart = ${cart}, Total Price = ${result}`);
});
