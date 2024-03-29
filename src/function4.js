// create a function that takes an array of stringified number as parameter and return an array of numbers
// ex: ["1","3","6.7"] => [1,3,6.7]

function stringArrayToNumber(arr) { // Create a function named stringArrayToNumber that takes an array as an argument.
    return arr.map(Number); // Use the map method to iterate through the array and convert each element to a number using the Number function.
}

// console.log(stringArrayToNumber(["1", "3", "6.7"]))





// function arrayToNumbersTwo(arr){
//     let temp = [];
//     for(let i = 0; i < arr.length; i++){
//         temp[i] = JSON.parse(arr[i]);
// }
// return temp;
// }

// console.log(arrayToNumbersTwo(["1", "3", "6.7"]))




//Create a function that returns (true) if all parameters are truthy, and (false) otherwise.
//Ex. checkParam(true, true, true) => true
//checkParam(5,1,3,0) => false
//Falsy values are: false,0,""


// function checkParam() {
//     return Array.from(arguments).every(Boolean);
// }

// console.log(checkParam(true, true, false));
// console.log(checkParam(3, 1, 2, 0));


// function checkParamThree(param1, param2, param3, param4) {
//     return Boolean(param1 && param2 && param3 && param4);
// }

// console.log(checkParamThree(true, true, true, true));
// console.log(checkParamThree(3, 1, 2, 0));


//Create a function to check if an array contains a particular numbers
//Ex. checkArray([1,2,3,4,5], 3) => true
//checkArray([1,2,3,4,5], 6) => false

function checkArrayForNumbers(arr, num) {
    return arr.includes(num);
}

console.log(checkArrayForNumbers([1, 2, 3, 4, 5], 3));
console.log(checkArrayForNumbers([1, 2, 3, 4, 5], 6));





