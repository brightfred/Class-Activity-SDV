// create a function that takes a string and return the first character that that repeats .if the there is no repeatsof a character then return -1
// example: "hello" => "l"
// i need to use string.prototype.indexOf() in my function

function firstRepeat(string) { //declared function firstRepeat with a parameter string
     for (let i = 0; i < string.length; i++) { //loop through the string until the end of the string
        if (string.indexOf(string[i])  !== i) {   // if the index of the string is not equal to the index of the string( example of iteneration: 0 !== 0 is false, 1 !== 1 is false, 2 !== 2 is false, 3 !== 3 is false, 2 !== 4 is true) 
            return string[i];
        }
    }
    return -1;
}
console.log(firstRepeat("alliance"));
/*Step 1:

i = 0
string[i] = 'F'
string.indexOf('F') = 0 (first occurrence of 'F' is at index 0)
0 !== 0 is false
Continue to next iteration
Step 2:

i = 1
string[i] = 'r'
string.indexOf('r') = 1 (first occurrence of 'r' is at index 1)
1 !== 1 is false
Continue to next iteration
Step 3:

i = 2
string[i] = 'e'
string.indexOf('e') = 2 (first occurrence of 'e' is at index 2)
2 !== 2 is false
Continue to next iteration
Step 4:

i = 3
string[i] = 'd'
string.indexOf('d') = 3 (first occurrence of 'd' is at index 3)
3 !== 3 is false
Continue to next iteration
Step 5:

i = 4
string[i] = 'e'
string.indexOf('e') = 2 (first occurrence of 'e' is at index 2)
2 !== 4 is true
The function returns 'e' */


// now refactor the function in es6
const firstRepeatEs6 = string => {
    for (let i = 0; i < string.length; i++) {
        if (string.indexOf(string[i]) !== i) {
            return string[i];
        }
    }
    return -1;
}
console.log(firstRepeat("abracadabra"));


// create a function that reverse the letters in a string but keeps the numbers in their current position use push ,pop and isnumber() methods
// example: "ab12c" => "cb12a"

function number(number) {
    return number >= "0" && number <= "9";
}

function reverseString(string) {
let temps = []; // this is a storage for non numeric characters
for (let i = 0; i < string.length; i++) { // loop through the string
    if (!number(string[i])) { // if the string is not a number
        temps.push(string[i]); // then push the string into the temps array
    } 
}
let result = []; // this is a storage for the result  
for (let i = 0; i < string.length; i++) { // loop through the string
    if (!number(string[i])) { // if the string is a number
        result += temps.pop(); //  then pop the last element from the temps array and add it to the result. i used += because i want to add the numeric character to the result and . += is a shorthand for result = result + temps.pop(). += definition: The addition assignment operator (+=) adds the value of the right operand to a variable and assigns the result to the variable.
    }
    else {
        result += string[i]; // otherwise add the numeric character to the result
    }
}
return result;
}

console.log(reverseString("ab12c"));


