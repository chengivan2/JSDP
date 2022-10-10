//How to properly organize your code

/*
    1. Module DP - Encapsulating code into pure functions
*/


//We import functions from other files/modules
import calc from './maths.js';

const operation = calc("add", 12, 13);

console.log(operation);