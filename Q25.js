// Write a JavaScript Program to Check if a number is Positive, Negative.
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

let number = -5;
console.log(number + " is " + checkNumber(number));
