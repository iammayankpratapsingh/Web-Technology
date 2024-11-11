// 34. JavaScript Program to Illustrate Different Set Operations
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Union
const union = new Set([...setA, ...setB]);
console.log("Union:", union);

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersection:", intersection);

// Difference
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log("Difference:", difference);
