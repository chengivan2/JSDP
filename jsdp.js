const calc = () => {
    return 4 * 5;
};
/*
=
First-class citizenship, 
within the world of programming, 
means that a given entity (such as a function)
supports all the operational properties inherent to other entities;
*/

let anum = calc();

console.log(anum);

/**
 * A callback function is a function
 * passed into another function as an argument, 
 * which is then invoked inside the outer function
 * to complete some kind of routine or action.
 */

 const callBc = (callback) => {
    return callback();
};

console.log(callBc(calc));