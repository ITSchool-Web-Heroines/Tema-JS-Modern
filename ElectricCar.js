import { Vehicle } from "./Vehicle.js"
import { Car } from "./Car.js"
class electricCar extends Car {
    battery;
    constructor(price, year, type, autonomy, noOfSeats, noOfDoors, battery) {
        super(price, year, type, autonomy, noOfSeats, noOfDoors);
        this.battery = battery
    }
}