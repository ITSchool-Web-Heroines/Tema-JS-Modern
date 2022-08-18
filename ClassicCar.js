import { Vehicle } from "./Vehicle.js"
import { Car } from "./Car.js"
class classicCar extends Car {
  fuel(fuel) {
    if (fuel === "P") {
      return "Petrol";
    }
    if (fuel === "D") {
      return "Diesel";
    }
  }
  constructor(price, year, type, autonomy, noOfSeats, noOfDoors) {
    super(price, year, type, autonomy, noOfSeats, noOfDoors);
  }
}