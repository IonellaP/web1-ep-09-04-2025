const array = [1, 2, 2, 2, 3, 4, 5]

function countOcurrencesOfValue(array, value) {
    return array.filter(number => number === value).length;
   // return array.filter(number => number === value);

}
console.log(array)
console.log("Value is repeated by: " + countOcurrencesOfValue(array,2       ))
//console.log( countOcurrencesOfValue(array,2))