// create a function that calculates overtime and pay associated with overtime. working 9 to 5 are operating hours,after 5pm is overtime. your function gets an arraywith 4 values:start of the working day in decimal format (24hour day notation),2-end of working day(same format) 3-overtime multiplier 4- your function should spit out : ($+)earned that day (rounded to the nearest hundreth)

function overtimePay(arr) {
        let start = arr[0];
        let end = arr[1];
        let multiplier = arr[2];
        let overtime = 0;
        let regular = 0;
        // and then we need to calculate the overtime and regular pay 
        if (end > 17) { // the logic here is that if the end time is greater than 5pm, then we have overtime and if it is less than 5pm, then we have regular pay
            overtime = end - 17;
            regular = 8;
        } else {
            regular = end - start;
        }
        // then we calculate the total pay
        let total = (regular * 10) + (overtime * 10 * multiplier);
        // then we round it to the nearest hundredth
       let pay = total.toFixed(2);
        return pay;
    }
    // test cases                        // the hourly rate is 10.00 and the overtime multiplier is 1.5
console.log(overtimePay([9, 18.25, 1.5]));  // this calculates the pay for working from 9am to 5pm with a multiplier of 1.5 for overtime pay and should return 80.00 



// create a function to rotate a two dimmensionnal array matrix of N*N integer elements num times , where if num is positive ,the rotation is clockwise,and if not ,counter clockwise. ex:arrRotate([[1,2,3],[4,5,6],[7,8,9]],1) => [[7,4,1],[8,5,2],[9,6,3]]

function arrRotate(arr, num) {
    // we need to create a new array to store the rotated array
    let rotated = [];
    // we need to check if the number is positive or negative
    if (num > 0) {
        // if the number is positive, we need to rotate the array clockwise
        for (let i = 0; i < arr.length; i++) {
            let temp = []; 
            for (let j = arr.length - 1; j >= 0; j--) {
                temp.push(arr[j][i]);
            }
            rotated.push(temp);
        }
    } else {
        // if the number is negative, we need to rotate the array counter clockwise
        for (let i = arr.length - 1; i >= 0; i--) {
            let temp = [];
            for (let j = 0; j < arr.length; j++) {
                temp.push(arr[j][i]);
            }
            rotated.push(temp);
        }
    }
    return rotated;
}

// test cases
console.log(arrRotate([[2 , 4], [0 , 0]], -1)); 




''