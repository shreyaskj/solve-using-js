function oddEvenDifference(input) {
    let numbers = input.split('');
    let oddSum = 0, evenSum = 0;
    console.log(numbers);
    numbers.forEach((number, index) => {
        if(index % 2 === 0){
            evenSum += parseInt(number);
        } else {
            oddSum += parseInt(number);
        }
    })
    return (oddSum - evenSum)
}

module.exports = oddEvenDifference;