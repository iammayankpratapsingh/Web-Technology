// 37. JavaScript Program to Pass a Function as Parameter
function executeFunction(fn) {
    fn();
}
executeFunction(() => console.log("Function passed as parameter executed."));
