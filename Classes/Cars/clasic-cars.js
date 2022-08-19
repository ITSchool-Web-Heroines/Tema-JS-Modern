import Car from "../car.js";
// export class ClasicCar extends Car {
//   Engine(fuel) {
//     if (fuel === "B") {
//       return "Benzină";
//     }
//     if (fuel === "M") {
//       return "Motorină";
//     }
//     return "Hibrid";
//   }
//   constructor(price, year, type, Range, noSeats, noDoors) {
//     super(price, year, type, Range, noSeats, noDoors);
//   }
// }
export class ClasicCar extends Car {
  constructor(price, year, type, Range, noSeats, noDoors, fuel) {
    super(price, year, type, Range, noSeats, noDoors);
    this.fuel = fuel;
  }
}
