// 40. JavaScript Program to Create Objects in Different Ways
// Using object literal
const obj1 = { name: "Alice" };

// Using new Object()
const obj2 = new Object();
obj2.name = "Bob";

// Using constructor function
function Person(name) {
    this.name = name;
}
const obj3 = new Person("Charlie");

console.log(obj1, obj2, obj3);
