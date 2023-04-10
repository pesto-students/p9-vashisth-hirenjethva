const maxProfit1 = prices => {
    let profit = 0, left = 0, right = 1, n = prices.length
    while(right < n){
        left;
        right;
        if(prices[right] > prices[left]){
            let transaction = prices[right]-prices[left]
            profit = Math.max(transaction, profit)
        }
        else{
            left = right
        }
        right ++
    }
    return profit;
}
console.log(maxProfit1([1,2])); // 1
console.log(maxProfit1([7,1,5,3,6,4])); // 5
// TC = O(n)
// SC = O(1)