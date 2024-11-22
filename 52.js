// file1.js
export const greeting = "Hello World";

// file2.js
import { greeting } from './file1.js';
console.log(greeting);
