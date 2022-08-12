// Se dau următoarele variabile
const currency = {
  local: "RON",
  international: "€",
  exchangeRate: 5,
};
const book1 = {
  title: "Kéraban Încăpățânatul",
  author: "Jules Verne",
  localPrice: 30,
  euroPrice: function (price) {
    return this.localPrice * exchangeRate;
  },
};
const book2 = {
  title: "Peripețiile bravului soldat Švejk",
  author: "Jaroslav Hašek",
  localPrice: 50,
  euroPrice: function (price) {
    return this.localPrice * exchangeRate;
  },
};

function displayBook(book) {
  return `${title} de ${author} are pretul de ${localPrice} ${local} (${euroPrice()} ${international})`;
}

console.log(displayBook(book1));
// Ar trebui să scrie:
// "Kéraban Încăpățânatul de Jules Verne are prețul de 30 RON (6 €)"

console.log(displayBook(book2));
// Ar trebui să scrie:
// "Peripețiile bravului soldat Švejk de Jaroslav Hašek are prețul de 50 RON (10 €)"
