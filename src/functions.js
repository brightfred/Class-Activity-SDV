function greeting(){
    return console.log('Hello World')
}

// console.log(greeting()) // Output: Hello World

function add(num1, num2){
    return num1 + num2
}

// console.log(add(10, 20)) 

// write a function that takes an array wether the sum of its element is even or odd, the value should return a string that says "The sum is even" or "The sum is odd"

function sumOfArray(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    if(sum % 2 == 0){
        return 'even'
    } else {
        return 'odd'
    }
}

console.log(sumOfArray([1, 4, 5])) // Output: The sum is odd


// write a function that takes an array and of items and return only integers

function onlyIntegers(arr){  // name the function onlyIntegers and pass in an array as a parameter
    let integer = [] // declare a variable called integer and assign it an empty array
    for(let i = 0; i < arr.length; i++){ // declare a for loop that will loop through the array and set the condition to the length of the array 
        if(Number.isInteger(arr[i])){ // check if the current element is an integer
            integer.push(arr[i]) // if it is an integer, push it to the integer array 
        }
    }
    return integer
}

console.log(onlyIntegers([1, 2, 3, 'a', 'b', 4])) // Output: [1, 2, 3, 4]


// write a function that takes an array with numbers and return an array with the element multiplied by 2

function multiplyByTwo(arr){ // name the function multiplyByTwo and pass in an array
    let multiplied = [] // declare a variable called multiplied and assign it an empty array
    for(let i = 0; i < arr.length; i++){ // declare a for loop that will loop through the array and set the condition to the length of the array
        multiplied.push(arr[i] * 2) // multiply each element by 2 and push it to the multiplied array
    }
    return multiplied
}

console.log(multiplyByTwo([1, 2, 3, 4, 5])) // Output: [2, 4, 6, 8, 10]