/*
Creational patterns 
control the creation process of objects
*/


/*
    1. Prototype class DP allows you to create a blueprint to reuse to create new objects
*/

class Car {
    constructor(seats, color, convertible) {
        this.seats = seats;
        this.color = color;
        this.convertible = convertible;
    }
}


const cedes = new Car(2, "blue", true);

// console.log(cedes);
// console.log(cedes.seats);

/*
    2. Constructor - special method used to initialize a newly created object 
        once memory has been allocated for it. Constructor DP allows you to 
        leverage a created class to create a class extended from it
*/

class CarBoat extends Car {
    constructor(seats, color, convertible, radar) {
        super(seats, color, convertible); //to be able to use the properties from the extended class
        //Now we can add what we need for this class
        this.radar = radar;
    }
}

const cedes_h20 = new CarBoat (0, "red", true, 8);

// console.log(cedes_h20);
// console.log(cedes_h20.radar);


/*
    3. Singleton - Allows only one instance of the class.
        Like a country can only design one form of government
*/

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

// console.log(cedes1);
// console.log(cedes1.seats);

const cedes2 = new Car1(5, "Red", true); //This won't be created by the Car1 class

// console.log(cedes2);
// console.log(cedes2.color);

/*
    4. Factory -  When you want to define a mechanism for crearing new objects. 
        Basically it's a class with methods in it that call code that handle the creation.
        Creates one family of objects.
*/

class carFactory {
    makeCar(carType) {
        switch(carType) { //Can use if...else
            case "cedes":
                return new Car(7, "gray", true);
            case "cedes2":
                return new Car(5, "Red", true);
        }
    }
}

const myFactory = new carFactory();
const createCar = myFactory.makeCar("cedes");
//console.log(!createCar.convertible); //The client asks if it's a convertible

/*
    5. Abstract factory -  work around a super-factory which creates other factories.
        Creates different families. 
        Framework for multiple "factories" (classes and methods created using factory DP).
*/

//A factory class for class Ivancars

class ivanCar {
    makeCar(carType) {
        switch(carType) { //Can use if...else
            case "cedesivan":
                return new Car(3, "green", true);

            case "cedes2ivan":
                return new Car(3, "greenblue", true);
                
        }
    }
}

const ivanFactory = new ivanCar(); //create a new object of the abstract class

//This method will handle the mechanics of the abstract factory class
const ivanManu = (type, model) => {
    switch (type) {
        case "normal car":
            return myFactory.makeCar(model); //from the carFactory factory class
        case "ivan car":
            return ivanFactory.makeCar(model);
    }
}

const customer1 = ivanManu("normal car", "cedes"); //Creates a new object using the carFactory factory class
const customer2 = ivanManu("ivan car", "cedes2ivan") //Creates a new object using the ivanCar factory class

console.log(customer1);
console.log(customer2);