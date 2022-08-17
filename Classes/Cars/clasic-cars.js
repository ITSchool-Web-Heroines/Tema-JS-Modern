export class clasicCar extends Car {
  Engine(fuel) {
    if (fuel === "B") {
      return "Benzină";
    }
    if (fuel === "M") {
      return "Motorină";
    }
    return "Hibrid";
  }
  constructor(price, year, type, Range, noSeats, noDoors) {
    super(price, year, type, Range, noSeats, noDoors);
  }
}
