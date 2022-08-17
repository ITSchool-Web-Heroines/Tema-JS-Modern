export class electricCar extends Car {
  constructor(price, year, type, range, noseats, nodoors, batery) {
    super(price, year, type, range, noseats, nodoors);
    this.Batery = `${batery} kWh`;
  }
}
