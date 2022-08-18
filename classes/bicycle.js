export class Bicycle extends Vehicle {
  destination;
  wheelSize;
  gears;

  constructor(price, year, destination, wheelsize, gears) {
    super(price, year);
    this.destination = destination;
    this.wheelSize = wheelsize;
    this.gears = gears;
  }
}
