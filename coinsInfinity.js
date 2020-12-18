function final(coins, value) {
    coins.sort(function (a, b) {
        return a - b;
    })
    function count(arr) {
        return arr.reduce((sum, coin) => sum + coin, 0)
    }
    let perm = [];
    loop1: while (coins.length >= 1) {
        let temp = 0;
        loop2: for (let i = coins.length - 1; i >= 0; i--) {
            if (count(perm) + coins[i] > value) {
                continue loop2;
            };
            loop3: while (true) {
                if (temp + coins[i] > value) {
                    break loop3;
                }
                temp += coins[i];
                perm.push(coins[i]);
            }
            if (count(perm) === value) {
                break loop1;
            }
        }
        coins.pop();
    }
    let permutations = [];
    permutations.push(perm);
    return permutations[0].length;
}
console.log('Number of coins', final([1, 3], 11));