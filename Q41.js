// 41. JavaScript Program to Loop Through an Object
const person = { name: "Mayank", age: 23, city: "Bijnor" };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
