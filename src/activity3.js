// Write a function to rotate an array to the right according to a number provided in the function argument without using shift and unshift methods
// example: [1,2,3,4,5], 2 => [4,5,1,2,3]

function rotateArray(arr, num) {
    for (let i = 0; i < num; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(rotateArray([1, 2, 3, 4, 5], 4)); // [,5,1,2,3]
 
// same in es 6
const rotateArray2 = (arr, num) => {
    for (let i = 0; i < num; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}

console.log(rotateArray2([1, 2, 3, 4, 5], 2)); // [4,5,1,2,3]


// create a function that takes an array of values ,remove all duplicate value(string,boolean or numbers) and return an array of only unique values in the same order as they first appeared in the array
// example: [1,2,3,4,5,2,3,4,5,"hello","hello",true,true,false] => [1,2,3,4,5,"hello",true,false]

function removeDuplicates(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index); //  explain this line like i was 10 : the filter() method creates a new array with all elements that pass the test implemented by the provided function. In this case, the function checks if the index of the current value is equal to the index of the first occurrence of the value in the array. If it is, the value is added to the new array. If not, it is not added to the new array. This ensures that only unique values are included in the new array.
}
// console.log(removeDuplicates([1, 9, 3, 4, 5, 9, 3, 4, 5, "hello", "hello", true, true, false])); 

// do the same function in another es5 way than this :return arr.filter((value, index) => arr.indexOf(value) === index);
function pushDuplicates(arr) {
    let uniqueNewArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueNewArr.indexOf(arr[i]) === -1) { //  if the value is not in the new array, add it to the new array. indexof is used to check if the value is in the new array by checking if the index of the value is -1. -1 means the value is not in the array.the reason 
            uniqueNewArr.push(arr[i]); //  add the value to the new array
        }
    }
    return uniqueNewArr; //  return the new array with only unique values
}
// explanation of the code in simple terms:   the function loops through the array and checks if the value is already in the new array. If it is not, the value is added to the new array. This ensures that only unique values are included in the new array. The new array is then returned.
console.log(pushDuplicates([1, 9, 3, 4, 5, 9, 3, 4, 5, "Ali", "Ali", true, true, false]));

// index of method returns the first index at which a given element can be found in the array, or -1 if it is not present.


// filter() method creates a new array with all elements that pass the test implemented by the provided function.
// reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter







