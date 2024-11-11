// 36. JavaScript Program to Pass Parameter to a `setTimeout()` Function
function greet(name) {
    console.log(`Hello, ${name}`);
}
setTimeout(greet, 2000, "Mayank");
