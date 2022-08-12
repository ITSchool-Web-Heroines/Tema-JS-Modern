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
};
const book2 = {
  title: "Peripețiile bravului soldat Švejk",
  author: "Jaroslav Hašek",
  localPrice: 50,
};

function displayBook(book) {
  // Completează această funcție
  return `${book.title} de ${book.author} are pretul de ${
    book.localPrice
  } RON (${book.localPrice / 5} €)`;
}

console.log(displayBook(book1));
// Ar trebui să scrie:
// "Kéraban Încăpățânatul de Jules Verne are prețul de 30 RON (6 €)"

console.log(displayBook(book2));
// Ar trebui să scrie:
// "Peripețiile bravului soldat Švejk de Jaroslav Hašek are prețul de 50 RON (10 €)"
