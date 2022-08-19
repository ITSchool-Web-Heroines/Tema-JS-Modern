import Vehicle from "./Vehicle.js";
export default class Car extends Vehicle {
  constructor(price, year, type, range, noseats, nodoors) {
    super(price, year);
    this.Type = type;
    this.Range = `${range} KM`;
    this.noSeats = noseats;
    this.noDoors = nodoors;
  }
}
