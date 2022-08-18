import { Car } from "./car.js";
export class ClasicCar extends Car {
  fuel;
  constructor(price, year, type, range, noOfSeats, noOfDoors, fuel) {
    super(price, year, type, range, noOfSeats, noOfDoors);
    this.fuel = fuel;
  }
}
