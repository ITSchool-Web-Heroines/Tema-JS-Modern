const currency = {
  local: "RON",
  international: "€",
  exchangeRate: 5,
};
const book1 = {
  title: "Kéraban Încăpățânatul",
  author: "Jules Verne",
  localPrice: 30,
};
const book2 = {
  title: "Peripețiile bravului soldat Švejk",
  author: "Jaroslav Hašek",
  localPrice: 50,
};
function priceRonEuro(price) {
  return `are prețul de ${price} RON (${price / 5} €).`;
}
function displayBook(book) {
  return `${book.title} de ${book.author} ${priceRonEuro(book.localPrice)}`;
}

console.log(displayBook(book1));
// "Kéraban Încăpățânatul de Jules Verne are prețul de 30 RON (6 €)"

console.log(displayBook(book2));
// "Peripețiile bravului soldat Švejk de Jaroslav Hašek are prețul de 50 RON (10 €)"
