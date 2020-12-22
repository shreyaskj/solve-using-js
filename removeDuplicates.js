// this creates a new array
function removeDuplicates(input) {
    input.sort((a,b) => {
        return a-b;
    })
    let final = []
    input.forEach((item) => {
        if(!final.includes(item)){
            final.push(item)
        }
    })
    return final.length
}
console.log(removeDuplicates([2,3,3,6,3,1,8,3,4,5]))

// this modifies the input array
function removeDuplicatesModify(input) {
    input.sort((a,b) => {
        return a-b;
    })
    let i = 0;
    while(i < input.length - 1) {
        if(input[i] === input[i + 1]) {
            input.splice(i, 1);
            continue
        }
        i++
    }
    return input.length
}
console.log(removeDuplicatesModify([2,3,3,6,3,1,8,3,4,5]))
console.log(removeDuplicatesModify(['d','a','a','b','c','d','d']))
// also works with strings, but does not do sorting!