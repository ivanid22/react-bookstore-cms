const booksFilter = (bookArray, filterCategory) => (
  filterCategory !== 'All' ? bookArray.filter(book => book.category === filterCategory) : bookArray
);

export default booksFilter;
