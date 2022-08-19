import Vehicle from "./Classes/vehicle.js";
import Bicycle from "./Classes/bike.js";
import Car from "./Classes/car.js";
import { ElectricCar } from "./Classes/Cars/electric-cars.js";
import { ClasicCar } from "./Classes/Cars/clasic-cars.js";

// VEHICUL
const theVehicle = new Vehicle(2000, 2002);
function showVehicle(vehicle) {
  console.log(`VEHICUL
Preț: ${vehicle.Price}. 
An de fabricație: ${vehicle.FabricationYear}. `);
}
showVehicle(theVehicle);

// BICICLETA
/*
const theBike = new Bicycle("250", 2015, 26, 21);
function showBike(bike) {
  console.log(`BICICLETĂ
Preț: ${bike.Price}. 
An de fabricație: ${bike.FabricationYear}. 
Dimensiune roți: ${bike.wheelSize}.
Viteze: ${bike.Gears}.
Destinată pentru: ${theBike.Use("mtb")}.`);
}
*/
const theBike = new Bicycle("250", 2015, 26, 21, "MTB");
function showBike(bike) {
  console.log(`BICICLETĂ
Preț: ${bike.Price}. 
An de fabricație: ${bike.FabricationYear}. 
Dimensiune roți: ${bike.wheelSize}.
Viteze: ${bike.Gears}.
Destinată pentru: ${bike.Use}.`);
}
showBike(theBike);

// MASINA
const theCar = new Car("3500", 2015, "Ford", 220, 4, 4);
function showCar(car) {
  console.log(`MAȘINĂ
Preț: ${car.Price}. 
An de fabricație: ${car.FabricationYear}. 
Brand: ${car.Type}. 
Autonomie: ${car.Range}. 
Număr de locuri: ${car.noSeats}. 
Număr de uși: ${car.noDoors}.`);
}
showCar(theCar);

// MASINA CLASICA
/*
const theCCar = new ClasicCar("5000", 2012, "VW", 230, 4, 4);
function showClasicCar(car) {
  console.log(`MAȘINĂ CLASICĂ
Preț: ${car.Price}. 
An de fabricație: ${car.FabricationYear}. 
Brand: ${car.Type}. 
Autonomie: ${car.Range}. 
Număr de locuri: ${car.noSeats}. 
Număr de uși: ${car.noDoors}. 
Combustibil: ${theCCar.Engine("B")}.`);
}
*/
const theCCar = new ClasicCar("5000", 2012, "VW", 230, 4, 4, "Benzină");
function showClasicCar(car) {
  console.log(`MAȘINĂ CLASICĂ
Preț: ${car.Price}. 
An de fabricație: ${car.FabricationYear}. 
Brand: ${car.Type}. 
Autonomie: ${car.Range}. 
Număr de locuri: ${car.noSeats}. 
Număr de uși: ${car.noDoors}. 
Combustibil: ${car.fuel}.`);
}
showClasicCar(theCCar);

// MASINA ELECTRICA
const theECar = new ElectricCar("10.000", 2019, "Tesla", 250, 4, 4, 100);
function showElectricCar(car) {
  console.log(`MAȘINĂ ELECTRICĂ
Preț: ${car.Price}. 
An de fabricație: ${car.FabricationYear}. 
Brand: ${car.Type}. 
Autonomie: ${car.Range}. 
Număr de locuri: ${car.noSeats}. 
Număr de uși: ${car.noDoors}. 
Baterie: ${car.Batery}.`);
}
showElectricCar(theECar);
