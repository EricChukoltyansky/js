let book = {
  book: "Dune",
  name: "Frank Herbert",
  year: "1964",
  country: "USA",
};

let bookFoo = (book) => {
  return `The book ${book.book} was written by ${book.name} in the year ${book.year} in the ${book.country}`;
};

console.log(bookFoo(book));
