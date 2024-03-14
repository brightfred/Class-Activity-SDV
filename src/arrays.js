//!SECTION - Javascript Arrays

//NOTE -   Arrays are a special type of object that can store a list of items.

//NOTE -   The items in an array can be of any data type, including other arrays.

//NOTE -   The items in an array are stored in a specific order, and each item can be accessed by using an index number.

//NOTE -   The index number of the first item in an array is 0, the index number of the second item is 1 up n-1.

//NOTE -   The length of an array is the number of items it contains.

//NOTE -   Arrays are created using square brackets [].

//NOTE -   The items in an array are separated by commas.


//NOTE -   The following example creates an array that contains three items:

// const fruits = ['apple', 'banana', 'orange'];

//NOTE -   The items in the fruits array are stored in a specific order, and each item can be accessed by using an index number.

//NOTE -   The index number of the first item in the fruits array is 0, the index number of the second item is 1, and the index number of the third item is 2.

//NOTE -   The length of the fruits array is 3, because it contains three items.

//NOTE -   The following example creates an array that contains three items, including another array:

// const fruits = ['apple', 'banana', ['orange', 'lemon']];
// console.log(fruits[2][1]); // Output: lemon

//NOTE -   The items in the fruits array are stored in a specific order, and each item can be accessed by using an index number.


let arr = []

arr = ['ali', 'khuwaji', 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

console.log(arr[0]) // Output: ali

console.log(arr[1]) // Output: khuwaji

//NOTE - push() method adds one or more items to the end of an array and returns the new length of the array.

arr.push('hello')

console.log(arr) // Output: [ 'ali', 'khuwaji', 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 'hello' ]

//NOTE - pop() method removes the last element from an array and returns that element.

arr.pop()

console.log(arr) // Output: [ 'ali', 'khuwaji', 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

//NOTE - unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

arr.unshift('hello')

console.log(arr) // Output: [ 'hello', 'ali', 'khuwaji', 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

//NOTE - shift() method removes the first element from an array and returns that removed element.

arr.shift()

console.log(arr) // Output: [ 'ali', 'khuwaji', 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

//NOTE - splice() method adds and/or removes elements from an array.

//NOTE - The first argument specifies the location at which to begin adding or removing elements.

//NOTE - The second argument specifies the number of elements to remove.

//NOTE - The remaining arguments specify the elements to be added.

arr.splice(2, 0, 'hello')

console.log(arr) // Output: [ 'ali', 'khuwaji', 'hello', 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

arr.splice(2, 1, 'hello')

console.log(arr) // Output: [ 'ali', 'khuwaji', 'hello', 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

arr.splice(2, 1)

console.log(arr) // Output: [ 'ali', 'khuwaji', 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

//NOTE - slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).

//NOTE - The original array will not be modified.

console.log(arr.slice(2, 5)) // Output: [ 10, 20, 30 ]

//NOTE - The concat() method is used to merge two or more arrays.

//NOTE - This method does not change the existing arrays, but instead returns a new array.

let arr1 = ['ali', 'khuwaji']
let arr2 = [10, 20, 30]

console.log(arr1.concat(arr2)) // Output: [ 'ali', 'khuwaji', 10, 20, 30 ]

//NOTE - The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

console.log(arr.join()) // Output: ali,khuwaji,10,20,30,40,50,60,70,80,90,100

console.log(arr.join(' ')) // Output: ali khuwaji 10 20 30 40 50 60 70 80 90 100

//NOTE - The reverse() method reverses an array in place.

console.log(arr.reverse()) // Output: [ 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 'khuwaji', 'ali' ]

//NOTE - The sort() method sorts the elements of an array in place and returns the sorted array.

console.log(arr.sort()) // Output: [ 10, 100, 20, 30, 40, 50, 60, 70, 80, 90, 'ali', 'khuwaji' ]

//NOTE - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

console.log(arr.indexOf(10)) // Output: 0

console.log(arr.indexOf(100)) // Output: 1

console.log(arr.indexOf(20)) // Output: 2

console.log(arr.indexOf(30)) // Output: 3

console.log(arr.indexOf(40)) // Output: 4


//NOTE - The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.

console.log(arr.lastIndexOf(10)) // Output: 0


//ANCHOR - JavaScript for loop, while loop, do while loop and for...in loop with examples . this is the best way to iterate any array mathematically trough a for loop.

//NOTE - The for loop is used to execute a block of code a specified number of times.

//NOTE - The for loop has the following syntax:

// for (initialization; condition; increment/decrement) {
//   // code to be executed
// }

//NOTE - The initialization statement is executed before the loop starts.

//NOTE - The condition is evaluated at the beginning of each loop iteration and will continue as long as it is true.

//NOTE - The increment/decrement statement is executed at the end of each loop iteration.

//NOTE - The following example uses a for loop to log the numbers from 0 to 4:

for (let i = 0; i < 5; i++) {
    console.log(i);
    }
// Output: // 0  // 1  // 2  // 3  // 4

for (let i = 0; i < arr.length; i++) {  // i++ is the same as i = i + 1  // i-- is the same as i = i - 1  // i += 2 is the same as i = i + 2  // i -= 2 is the same as i = i - 2

    console.log(i,arr[i]);
    }

// Output:  // 0 'ali'  // 1 'khuwaji'  // 2 10  // 3 20  // 4 30  // 5 40  // 6 50  // 7 60  // 8 70  // 9 80  // 10 90  // 11 100

console.log(arr.length) // Output: 12
//NOTE - The while loop is used to execute a block of code as long as the specified condition is true.

//NOTE - The while loop has the following syntax:

// while (condition) {
//   // code to be executed
// }

//NOTE - The following example uses a while loop to log the numbers from 0 to 4:

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
    }
// Output: // 0  // 1  // 2  // 3  // 4

let j = 0;
while (j < arr.length) {
    console.log(j,arr[j]);
    j++;
    }
// Output:  // 0 'ali'  // 1 'khuwaji'  // 2 10  // 3 20  // 4 30  // 5 40  // 6 50  // 7 60  // 8 70  // 9 80  // 10 90  // 11 100

//NOTE - The do...while loop is used to execute a block of code once, and then it will repeat the loop as long as the specified condition is true.

//NOTE - The do...while loop has the following syntax:

// do {
//   // code to be executed
// }
// while (condition);

//NOTE - The following example uses a do...while loop to log the numbers from 0 to 4:

let k = 0;
do {
    console.log(k);
    k++;
    }
while (k < 5);
// Output: // 0  // 1  // 2  // 3  // 4

let l = 0;
do {
    console.log(l,arr[l]);
    l++;
    }
while (l < arr.length);

// Output:
// 0 'ali'  // 1 'khuwaji'  // 2 10  // 3 20  // 4 30  // 5 40  // 6 50  // 7 60  // 8 70  // 9 80  // 10 90  // 11 100

//NOTE - The for...in loop is used to loop through the properties of an object.

//NOTE - The for...in loop has the following syntax:

// for (variable in object) {
//   // code to be executed
// }

//NOTE - The variable is a string that represents the property name, and object is the object that you want to loop through.

//NOTE - The following example uses a for...in loop to log the properties of an object:

let person = {fname:"Ali", lname:"Khuwaji", age:25};

let text = "";
for (let x in person) {
    text += person[x] + " ";
    }
console.log(text); // Output: Ali Khuwaji 25 

//NOTE - The for...in loop is used to loop through the properties of an object.

//NOTE - The for...in loop has the following syntax:

// for (variable in object) {
//   // code to be executed
// }

//NOTE - The variable is a string that represents the property name, and object is the object that you want to loop through.

//ANCHOR -  Javascript Iterators 

let a = [-5, -4, -3]
let b = 0
let c = [12,13,14]

//NOTE - concat() method is used to merge two or more arrays.

//NOTE - This method does not change the existing arrays, but instead returns a new array.

console.log(a.concat(b,c)) // Output: [ -5, -4, -3, 0, 12, 13, 14 ]

let numbers = [1, 2, 4, 6, 8, 9];

let isEven = (num) => {
    if (num % 2 === 0) {
        console.log(num + ' is even');
        return true; 
    } else {
        console.log(num + ' is odd');
        return false;
    }
}

console.log(numbers.every(isEven)); // Output: false

console.log(numbers.some(isEven)); // Output: true

// for (let m = 0; m < numbers.length; m++) {
//     isEven(numbers[m]);
// }

for (let n = 0; n < numbers.length; n++) {
    let temp = numbers[n];
    if (temp % 2 == 0) {
        console.log(temp + ' is even');
    } else {
        console.log(temp + ' is odd');
    }
} 

