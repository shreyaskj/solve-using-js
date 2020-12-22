
/* Two Pointer
Why not start at both ends and work your way in? Or start at a 
value or pair of values and expand outwards. This is a great approach for 
finding the largest sequence in a collection.

Because you are handling two points, you will need to define a rule to 
ensure that they do not cross over each other.*/
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    let sum = 0;
    while (left < right) {
        sum += arr[left] + arr[right];
        right--;
        left++;
    }
    return sum + arr[left];
}
console.log(sumZero([1, 2, 3, 4, 5]))

/* Divide and Conquer - using Recursion*/