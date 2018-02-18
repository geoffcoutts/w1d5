/*
Given a list of ordered stock market prices
I want to see what the lowest price and the highest price after it is
So that I can see what the greatest possible profit is
*/


// Brute-force method

// function maxProfit(stockPrices){
//   var profit = 0;
//   //loop through every price from the beginning in order to compare them
//   for (var i = 0; i < stockPrices.length; i++){
//     //loop through every price starting from the current price being compared in the first loop
//     for (var j = i; j < stockPrices.length; j++){
//       //if profit can be made, store the amount in profit
//       if (stockPrices[j] - stockPrices[i] > profit){
//         profit = stockPrices[j] - stockPrices[i];
//       }
//     }
//   }
//   //if profit can be made, return the amount, otherwise, return -1 signifying no profit
//   if (profit === 0){
//     return -1;
//   }
//   return profit;
// }

// var profit = 0;

// Recursive method

function maxProfit (stockPrices, profit = 0) {
  if (stockPrices.length > 1) {
    for (var i = 1; i < stockPrices.length; i++) {
      if (stockPrices[i] - stockPrices[0] > profit){
        profit = stockPrices[i] - stockPrices[0];
      }
    }
    return maxProfit(stockPrices.slice(1), profit);
  }
  if (profit > 0) {
    return profit;
  } else {
    return -1;
  }
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11])); //should return 16
console.log(maxProfit([45, 24, 23, 22, 15, 14, 11])); //should return -1
console.log(maxProfit([24, 54, 32, 65, 23, 23, 25])); //should return 41