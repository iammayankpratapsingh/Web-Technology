// JavaScript Program to Find the Factorial of a Number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let num = 5;
console.log("Factorial of " + num + " is " + factorial(num));
