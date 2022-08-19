// - Mașină (Proprietăți: tip, autonomie [km], număr de locuri, număr de uși)
// - Mașină electrică (Proprietăți: mărimea bateriei)
// - Mașină clasică (Proprietăți: combustibil [benzină, motorină])

export class Masina extends Vehicul {
  type;
  autonomy;
  noOfSeats;
  noOfDoors;
  constructor(type, autonomy, seats, doors) {
    this.type = type;
    this.autonomy = autonomy;
    this.noOfSeats = seats;
    this.noOfDoors = doors;
  }
}

export class MasinaElectrica extends Masina {
  batery;
  constructor(batery) {
    this.batery = batery;
  }
}

export class MasinaClasica extends Masina {
  fuel;
  constructor(fuel) {
    this.fuel = fuel;
  }
}
