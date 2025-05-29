"use strict";
// checkpoint is here
class Car {
    constructor(make, model, year) {
        this.start = () => {
            console.log("Car engine started");
        };
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
const firstInstance = new Car("Toyota", "Corolla", 2024);
firstInstance.start();
