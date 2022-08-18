import { Vehicle } from "./vehicle.js";
export class Car extends Vehicle {
  type;
  range;
  noOfSeats;
  noOfDoors;
  constructor(price, year, type, range, noOfSeats, noOfDoors) {
    super(price, year);
    this.type = type;
    this.range = range;
    this.noOfSeats = noOfSeats;
    this.noOfDoors = noOfDoors;
  }
}
