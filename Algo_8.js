//Built out a greedy function to compare stock prices from the day prior and what, hypothetically the profit margin would be 
//If buying at one moment and selling at another.

function bestSalePrice(stockPrices){
    if(stockPrices.length > 2){
        return "We need to values to compare stock prices from the day prior."
    }
    let lowestPrice = stockPrices[0]; 
    let largestPrice = stockPrices[0]; 
    for(let i = 1; i < stockPrices.length; i++){
        if(lowestPrice > stockPrices[i]){
            lowestPrice = stockPrices[i];
        }
        if(largestPrice < stockPrices[i]){
            largestPrice = stockPrices[i]; 
        }
    }
    return largestPrice - lowestPrice; 
}
console.log(bestSalePrice([10, 7, 5, 8, 11, 9])); 


//Another approach utilizing build in functions

function getMaxProfit(stockPrices) {
    if (stockPrices.length < 2) {
      return 'Getting a profit requires at least 2 prices';
    }
  
    let minPrice = stockPrices[0];
    let maxProfit = stockPrices[1] - stockPrices[0];
  
    for (let i = 1; i < stockPrices.length; i++) {
      const currentPrice = stockPrices[i];
  
      const potentialProfit = currentPrice - minPrice;
  
      // Update maxProfit if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);
  
      minPrice = Math.min(minPrice, currentPrice);

    }
  
    return maxProfit;
  }

  console.log(getMaxProfit([10, 7, 5, 8, 11, 9])); 