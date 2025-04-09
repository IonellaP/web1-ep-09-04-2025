const array = [4, 5, 6, 8, 7, 6, 10]

function reverse(array) {
    const reversedArray = []
    while (array.length) {
        reversedArray.push(array.pop());
    }
    return reversedArray;
}

console.log(array)
console.log(reverse(array))