import { Vehicle } from "./vehicle.js";
export class Car extends Vehicle {
  constructor(price, year, type, range, noseats, nodoors) {
    super(price, year);
    this.Type = type;
    this.Range = `${range} KM`;
    this.noSeats = noseats;
    this.noDoors = nodoors;
  }
}
