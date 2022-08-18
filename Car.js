import { Vehicle } from "./Vehicle.js"
export class Car extends Vehicle {
constructor(price, year, type, autonomy, noOfSeats, noOfDoors) {
    super(price, year);
    this.type = type;
    this.autonomy = autonomy;
    this.seats = noOfSeats;
    this.doors = noOfDoors;
  }
}