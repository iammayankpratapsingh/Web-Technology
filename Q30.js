// JavaScript Program to Check Armstrong Number
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, 3);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

let num = 153;
console.log(num + " is an Armstrong number: " + isArmstrong(num));
