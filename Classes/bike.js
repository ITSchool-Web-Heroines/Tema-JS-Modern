import Vehicle from "./Vehicle.js";
// export default class Bicycle extends Vehicle {
//   Use(destination) {
//     if (destination === "city") {
//       return "De oraș";
//     }
//     if (destination === "mtb") {
//       return "MTB";
//     }
//     return "Universal";
//   }
//   constructor(price, year, wheelsize, gears) {
//     super(price, year);
//     this.wheelSize = `${wheelsize} INCH`;
//     this.Gears = `${gears} viteze`;
//   }
// }
export default class Bicycle extends Vehicle {
  constructor(price, year, wheelsize, gears, use) {
    super(price, year);
    this.wheelSize = `${wheelsize} INCH`;
    this.Gears = `${gears} viteze`;
    this.Use = use;
  }
}
