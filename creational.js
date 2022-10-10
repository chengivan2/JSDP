/*
Creational patterns 
control the creation process of objects
*/


//1. Prototype class DP allows you to create a blueprint to reuse to create new objects

class Car {
    constructor(seats, color, convertible) {
        this.seats = seats;
        this.color = color;
        this.convertible = convertible;
    }
}


const cedes = new Car(2, "blue", true);

console.log(cedes);
console.log(cedes.seats);

//2. Constructor - special method used to initialize a newly created object once memory has been allocated for it.
//Constructor DP allows you to leverage a created class to create a class extended from it

class CarBoat extends Car {
    constructor(seats, color, convertible, radar) {
        super(seats, color, convertible); //to be able to use the properties from the extended class
        //Now we can add what we need for this class
        this.radar = radar;
    }
}

const cedes_h20 = new CarBoat (0, "red", true, 8);

console.log(cedes_h20);
console.log(cedes_h20.radar);


//3. Singleton - Allows only one instance of the class

let instance = null;

class Car1 {
    constructor(seats, color, convertible) {

        if (!instance) {
            this.seats = seats;
            this.color = color;
            this.convertible = convertible;
            instance = this;
        }
        
        else {
            return instance;
        }
        
    }
}

const cedes1 = new Car1(7, "gray", true);

console.log(cedes1);
console.log(cedes1.seats);

const cedes2 = new Car1(5, "Red", true);

console.log(cedes2);
console.log(cedes2.color);