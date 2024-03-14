//create a function which takes two StringList(p1 and p2) as arguments and returns a string stating the winner (Rock,Paper,Scissors)

//NOTE - Game conditions are as follows:
// if p1 wins return "The winner is P1"
// if p2 wins return "The winner is P2"
// if it's a draw return "It's a draw"
// if p1 or p2 is not "rock", "paper" or "scissors" return "Invalid input"

// function rps(p1,p2) {
// else if( p1 === "rock" && p2 === "scissors")return "The winner is P1"
// else if( p1 === "scissors" && p2 === "paper")return "The winner is P1"
// else if( p1 === "paper" && p2 === "rock")return "The winner is P1"
// else return "The winner is P2"
// }
 

// function rpsTwo(p1, p2){
//     let object = {
//         rock: 'scissors',
//         paper: 'rock',
//         scissors: 'paper'
//     }
// return p1 === p2 ? "It's a draw" : object[p1] === p2 ? "The winner is P1" : "The winner is P2"}
// console.log(rpsTwo('scissors', 'rock')) 


//NOTE - JS built in function includes() method is used to check if a string contains a specified value.

function rpsThree(p1,p2) {
    const wins = ['rockscissors', 'scissorspaper', 'paperrock']
    /*
    
    */
    return p1 === p2 ? "It's a draw" : `The winner is ${wins.includes(p1 + p2)? 'P1' : 'P2'}` 
}
console.log(rpsThree('rock', 'scissors')) // Output: The winner is P1