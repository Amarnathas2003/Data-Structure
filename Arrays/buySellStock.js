

function maxProfit(prices) {
    let smallestIndex = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[smallestIndex]) {
            smallestIndex = i;
        }
    }
    let smallestValue = prices[smallestIndex];


    let largestIndex = smallestIndex + 1;

    for (let j = smallestIndex + 1; j < prices.length; j++) {
        if (prices[j] > prices[largestIndex]) {
            largestIndex = j;
        }
    }

    const largestValue = prices[largestIndex];


    const profit = largestValue - smallestValue;
    if (profit >= 0) {
        return profit;
    } else {
        return false;
    }
}





const array = [7, 1, 5, 3, 6, 4]
maxProfit(array)