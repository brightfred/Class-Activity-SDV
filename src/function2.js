//TODO - create a function that takes an array and to return the types of the elements (data types) in a new array.

function arrayTypes(arr) { // create a function named arrayTypes that takes an array as an argument.
    let types = [] // create a variable named types and assign it an empty array.
    for (let i = 0; i < arr.length; i++) { // create a for loop that iterates through the array elements using the length of the array as the condition to stop the loop and increment the index by 1 each time the loop runs.
        types.push(typeof arr[i]) // push the data types of the elements in the array to the types array.
    }
    return types // return the types array after the loop has finished running and all the data types have been pushed to the array types.
}


// console.log(arrayTypes(['ali', 'khuwaji', 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]))

// now i need to refactor it in ES6

const arrayTypesTwo = arr => arr.map(x => typeof x) // create a function named arrayTypesTwo that takes an array as an argument and uses the map method to iterate through the array and return the data types of the elements in the array.
// console.log(arrayTypesTwo(['ali', 'khuwaji', 10, 20, 30, 40, 50, 60, 70, 80, 90, 100])) 

// create a function that takes two dimensional arrays and return the sum on min values in each row

function sumOfMin(arr) { // Create a function named sumOfMin that takes an array as an argument.
    let sum = 0; // Create a variable named sum and assign it the value of 0.
    for (let i = 0; i < arr.length; i++) { // Create a for loop that iterates through the array elements using the length of the array as the condition to stop the loop and increment the index by 1 each time the loop runs.
        let y = arr[i][0]; // Initialize y with the first element of the sub-array to handle comparison.
        for (let x = 0; x < arr[i].length; x++) { // Create a for loop that iterates through the sub-array elements.
            if (y > arr[i][x] ) { // Create a conditional statement that checks if the current element is less than the value of y.
                y = arr[i][x]; // If the condition is true, assign the current element to the value of y.
            }
        }
        sum += y; // Add the value of y (minimum in the current sub-array) to the sum variable.
    }
    return sum; // Return the sum variable after the loop has finished running and all the minimum values have been added to the sum.
}

//now write a test for this code

//  console.log(sumOfMin([[1,2,3], [4,5,6], [7,8,9]])) 



// console.log(sumOfMin([[1,2,3], [4,5,6], [7,8,9]])) 

// now i need to refactor it in ES6 without math.min

const sumOfMinTwo = arr => arr.map(x => Math.min(...x)).reduce((a, b) => a + b, 0) // Create a function named sumOfMinTwo that takes an array as an argument and uses the map method to iterate through the array and return the minimum value of each sub-array. Then use the reduce method to add the minimum values of each sub-array and return the sum.

// console.log(sumOfMinTwo([[1,2,3], [4,5,6], [7,8,9]])) 

//create a function that takes an array, return duplicate numbers in a new array

function duplicateNumbers(arr) { // Create a function named duplicateNumbers that takes an array as an argument.
    let duplicates = []; // Create a variable named duplicates and assign it an empty array.
    for (let i = 0; i < arr.length; i++) { // Create a for loop that iterates through the array elements using the length of the array as the condition to stop the loop and increment the index by 1 each time the loop runs.
        if (arr.indexOf(arr[i]) !== i && !duplicates.includes(arr[i])) { // Create a conditional statement that checks if the current element is a duplicate and if it is not already in the duplicates array.
            duplicates.push(arr[i]); // If the condition is true, push the current element to the duplicates array.
        }
    }
    return duplicates; // Return the duplicates array after the loop has finished running and all the duplicate elements have been pushed to the duplicates array.
}
console.log(duplicateNumbers([1,2,3,4,5,6,7,8,9,8,9]))


// now i need to refactor it in ES6

// Create a function named duplicateNumbersTwo that takes an array as an argument and uses the filter method to iterate through the array and return the duplicate elements in the array.

const duplicateNumbersTwo = arr => arr.filter((x, i) => arr.indexOf(x) !== i) // Create a function named duplicateNumbersTwo that takes an array as an argument and uses the filter method to iterate through the array and return the duplicate elements in the array.
console.log(duplicateNumbersTwo([1,2,3,4,5,6,7,8,9,8,9])) // Output: [8, 9]


const duplicateNumbersThree = arr => (
    arr= [...new Set([...arr.filter(num => arr.indexOf(num) !== arr.lastIndexOf(num))])].sort((a, b) => a - b),
    arr.length ? arr : 'No duplicates found'
)

console.log(duplicateNumbersThree([1,2,3,3,5,6,7,8,9,8,9])) // Output: [8, 9]





