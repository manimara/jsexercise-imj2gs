function maxProfit(prices) {
    let maxprofit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1])
            maxprofit += prices[i] - prices[i - 1];
    }
    return maxprofit;
}
let inp = [7,1,5,3,6,4];
let op = 7;
console.log(
    maxProfit(inp),
    `op`, op);

let inp1 = [1,2,3,4, 5];
let op1 = 7;
console.log(
    maxProfit(inp1),
    `op`, op1);