// 35. JavaScript Program to Check If a Variable is of Function Type
function checkFunctionType(variable) {
    return typeof variable === 'function';
}
console.log(checkFunctionType(() => {}));
