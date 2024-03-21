// create a function that takes an array of numbers or letters and returns a string

function arrayToString(arr) { // Create a function named arrayToString that takes an array as an argument.
    return arr.join(''); // Use the join method to convert the array elements to a string and return the string.
}
console.log(arrayToString([1,2,3,4,5,6,7,8,9])) // Output: '123456789'
console.log(arrayToString(['a','b','c','d','e','f','g','h','i'])) // Output: 'abcdefghi'


function arrayToString(arr) { // Create a function named arrayToString that takes an array as an argument.
    let result = ""; // Create a variable named result and assign it an empty string.
    for (let i = 0; i < arr.length; i++) { // Create a for loop that iterates through the array elements using the length of the array as the condition to stop the loop and increment the index by 1 each time the loop runs.
        result = result + arr[i]; // Add the current element to the result variable.
    }
    return result; // Return the result variable after the loop has finished running and all the elements have been added to the result.
}

console.log(arrayToString([6,9,"ali","sonny"])) // Output: '12345'



// create a function that takes an array with numbers , transform that array into a mirror.

function arrayToMirror(arr) { // Create a function named arrayToMirror that takes an array as an argument.
 for(let i = arr.length - 2; i >= 0; i--) { // Create a for loop that iterates through the array elements using the length of the array as the condition to stop the loop and decrement the index by 1 each time the loop runs.
     arr.push(arr[i]); // Add the current element to the end of the array.
 }
    return arr; // Return the array after the loop has finished running and all the elements have been added to the end of the array.
}
console.log(arrayToMirror([1,2,3,4,5])) // Output: [1, 2, 3, 4, 5, 4, 3, 2, 1]

// now i need to refactor it in ES6

const toMirror = arr => [...arr,...arr.reverse().slice(1)] // Create a function named toMirror that takes an array as an argument and uses the concat method to add the reversed sub-array to the original array and return the new array.
console.log(toMirror([1,2,3,4,5])) // Output: [1, 2, 3, 4, 5, 4, 3, 2, 1]


//create a function that returns the total number of arrays inside a given main array

function countArrays(arr) { // Create a function named countArrays that takes an array as an argument.
    let count = 0; // Create a variable named count and assign it the value of 0.
    for (let i = 0; i < arr.length; i++) { // Create a for loop that iterates through the array elements using the length of the array as the condition to stop the loop and increment the index by 1 each time the loop runs.
        if (Array.isArray(arr[i])) { // Use the isArray method to check if the current element is an array.
            count++; // If the current element is an array, increment the count variable by 1.
        }
    }
    return count; // Return the count variable after the loop has finished running and all the elements have been checked.
}

console.log(countArrays([[1,2],[3,4],5])) // Output: 2









