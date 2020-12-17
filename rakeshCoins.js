var coinChange = function (coins, amount) {
    let mincoins = []
    for (let i = 1; i <= amount; i++) {
        mincoins[i] = amount + 1;
    }
    console.log('mincoins - ',mincoins);
    mincoins[0] = 0;
    for (let a = 1; a <= amount; a++) {
        for (let j = 0; j < coins.length; j++) {
            if (a >= coins[j]) {
                mincoins[a] = Math.min(mincoins[a], mincoins[a - coins[j]] + 1)
            }
        }
    }
    return (mincoins[amount] <= amount) ? mincoins[amount] : -1
};
console.log(coinChange([], 13));