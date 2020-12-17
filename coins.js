function final(coins, value) {
    let permutations = [];
    coins.sort(function(a, b){
        return a-b;
    })
    console.log('coins sorted - ', coins);
    function count(arr){
        return arr.reduce((sum, coin) => sum + coin, 0) //[9,1,3,6,7,4,5]
    }
    while(count(coins) >= value){
        let perm = [];
        for(let i = coins.length - 1; i >= 0; i--){
            if(coins[i] > value){
                continue;
            } else if(count(perm) + coins[i] > value){
                continue;
            }
            perm.push(coins[i]);
            if(count(perm) === value){
                break;
            }
        }
        coins.pop();
        console.log('coin poped - ', coins);
        if(count(perm) === value) {
            permutations.push(perm);
        }
    }
    console.log('permutations - ', permutations);
    return Math.min(...permutations.map((perm) => {
        return perm.length;
    }))
}
console.log('Number of coins', final([9,1,3,6,7,4,5], 13));