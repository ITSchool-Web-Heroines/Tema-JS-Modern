export class ElectricCar extends Car {
  battery;
  constructor(price, year, type, range, noOfSeats, noOfDoors, battery) {
    super(price, year, type, range, noOfSeats, noOfDoors);
    this.battery = battery;
  }
}
