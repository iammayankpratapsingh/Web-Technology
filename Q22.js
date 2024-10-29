// Write a JavaScript Program to Swap Two Variables

function swapVariables(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

let a = 5;
let b = 10;
[a, b] = swapVariables(a, b);
console.log("Swapped values: a = " + a + ", b = " + b);
