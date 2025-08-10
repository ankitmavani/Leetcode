/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0
    let minValue = prices[0]
    for (let i = 1; i < prices.length; i++) {
        minValue = prices[i] < minValue ? prices[i]: minValue
        maxProfit = (prices[i] - minValue) > maxProfit ? prices[i]-minValue : maxProfit 
    }
    return maxProfit
};