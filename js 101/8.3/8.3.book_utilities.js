let book = { name: "", author: "", year: "" };
let book2 = { name: "", author: "", year: "" };
let bookUtils = {
  getFirstPublished() {
    book.year > book2.year ? book.year : book2.year;
  },
  setNewEdition(book, year) {
    Object.defineProperty(book, "latestEdition", {
      value: year,
    });
  },
  setLanguage(book, language) {
    Object.defineProperty(book, "language", {
      value: language,
    });
  },
  setTranslation(book, language, translator) {
    Object.defineProperties(book, "translation", {
      value: {
        language: language,
        translator: translator,
      },
    });
  },
  setPublisher(book, name, location) {
    Object.defineProperty(book, "publisher", {
      value: {
        name: name,
        location: location,
      },
    });
  },
  isSamePublisher(book1, book2) {
    book1.author === book2.author
      ? "Authors are same"
      : "Authors are not the same";
  },
};
