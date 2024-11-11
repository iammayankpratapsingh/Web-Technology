// 32. Write a JavaScript code to enter weekday number and print day name.
function getDayName(weekday) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekday >= 1 && weekday <= 7 ? days[weekday - 1] : "Invalid input";
}
console.log(getDayName(3)); // Example usage
