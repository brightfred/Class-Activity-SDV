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

function onlyIntegers(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(Number.isInteger(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}