// create a function that takes three collections of arguments and returns the sum of the product of numbers, add the results of the first number in each collection and multiply together to the result of the second number in each collection.

function product(num1,num2){
    return (num3,num4) => {
        return (num5, num6) => {
            return (num1*num3*num5) + (num2*num4*num6);
        }
    }
}

console.log(product(1,2)(3,4)(5,6));

// now refactor the code in es6 and the example (1,2)(3,4)(5,6);

const products = (num1,num2) => (num3,num4) => (num5, num6) => (num1*num3*num5) + (num2*num4*num6);

console.log(products(1,2)(3,4)(5,6));

// create a function that takes an array of strings and return an array sorted from shortest to longest string
//example ["ali", "is", "the", "best"] 

function sortedString(arr){
    return arr.sort((a,b) => a.length - b.length);
}

console.log(sortedString(["ali", "is", "the", "best"]));


const sortedStrings = (arr) => arr.sort((a,b) => a.length - b.length);

console.log(sortedStrings(["ali", "is", "the", "best"]));

// write a function that sums all the value in the array using for loop and return the sum
// example [1,2,3,4,5] => 15

function sumArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}




console.log(sumArray([1,2,3,4,5]));


// now in es6 using for each

const sumArrays = (arr) => {
    let sum = 0;
    arr.forEach((num) => sum += num);
    return sum;
}

console.log(sumArrays([1,2,3,4,8]));

