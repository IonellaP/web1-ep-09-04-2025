const array = [1, 2, 2, 2, 3, 4, 5]

function countOcurrencesOfValue(array, value) {
    return array.filter(number => number === value).length;

}
console.log(array)
console.log("Value is repeated by: " + countOcurrencesOfValue(array,2))