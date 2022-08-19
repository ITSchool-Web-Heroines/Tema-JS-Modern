// (Proprietăți: destinație [oraș, MTB], dimensiune roți, viteze)
export default class Bicicleta extends Vehicul {
  destination;
  wheels;
  speed;
  constructor(destination, noOfWheels, speed) {
    this.destination = destination;
    this.wheels = noOfWheels;
    this.speed = speed;
  }
}

const newBike = new Bicicleta(city, 50, 1000);
