// (Proprietăți: preț, an de fabricație)
export class Vehicul {
  price;
  yearMade;
  constructor(price, year) {
    this.price = price;
    this.yearMade = year;
  }
}

const vehiculNou = new Vehicul(4000, 2022);

const vehiculNou20 = new Vehicul(4500, 2022);
