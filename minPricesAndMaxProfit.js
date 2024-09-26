function minPricesAndMaxProfit(prices) {
    let minPrices = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrices) {
            minPrices = maxProfit;
        }
        else {
            let profit = prices[i] - minPrices;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}
let prices=[7,1,4,5,6];
console.log(minPricesAndMaxProfit(prices));
