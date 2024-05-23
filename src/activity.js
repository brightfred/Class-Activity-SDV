// create a function that counts integers numbers of digits
// example : 1234 => 4
// example : 123 => 3
// it need to only take into consideration numbers
// eample: -123 => 3
// example: 123.123 => 6
// example: 123.123.123 => 9

function countDigits(number) { //  123.123.123
    let num = number.toString().split('') //  this take the number and turn it into a string and split it into an array of strings ['1', '2', '3', '.', '1']
    let counter = 0 // start counter at 0
    for (let i = 0; i < num.length; i++) { // loop through the array of strings by the length of the array until the end of the array with the index i 
        if (num[i] !== '.' && num[i] !== '-') // if the index of the array is not a '.' or '-' 
            counter++ // increment the counter
        }
    return counter
}
console.log(countDigits(-12.56))



function cd(number) {
    return number.toString().length;
}
console.log(cd(100));

//numbers of numbers in a given number
// negative numbers

//transform each number into a positive number then turn it into a string,then split and count the lenght of the array to return the numbers of numbers in the given number
//1 find the absolute value of number passed in the function and set that to variable num
//2- turn the number nito a string
//3- return the length of the string

function intCount(n) {
    let positive = Math.abs(n);
    let numString = positive.toString();
    return numString.length;
}

console.log(intCount(-123.456));





// create a function that takes an array of integers as an argument and return the same array in ascending order using sort methods
// example: [1,4,2,3] => [1,2,3,4]
// and then you have to sort the array in ascending order with no built-in methods
function sortNumberAsc (number){
    return number.sort((c,d) => c-d);
}
console.log(sortNumberAsc([1,4,2,3]));


function sortNums(array) {
    for (let i = 0; i < array.length; i++) { // my loop to go through the array called array :p
if (array[i] > array[i + 1]) { // this is my condition to check if the first number is greater than the second number in the array
    let storeNumber = array[i]; // then store this is in temporary variable to hold the greater number
    array[i] = array[i + 1]; // this is to prevent the first number from being lost and the first number is equal to the second number
    array[i + 1] = storeNumber; // then the second number is equal to the first number, if i didnt do this the second number would be lost
}
    }
    return array;
}
console.log(sortNums([-1,4,2,3,10]));







function sortNum (number){
return number.sort((a,b) => b-a)
}
console.log(sortNum([1,1312,11]));

function sortNumber2(number){
    return number.sort((a,b) => a-b);
}

console.log(sortNumber2([1,8,9,5,4,3,2,1]));