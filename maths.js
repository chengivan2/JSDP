/*
    This file is meant to be imported
*/

const calc = (ops, num1, num2) => {

    switch (ops) {
        case "add":
            return num1 + num2;
        
        case "multiply":
            return num1 * num2;

        case "subtract":
            return num1 - num2;
        
        default:
            return num1/num2;
    }
}

export default calc; //This is how to make it available for use in other files