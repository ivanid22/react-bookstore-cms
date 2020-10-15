import { v4 as generateId } from 'uuid';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        action.book,
      ];
    case 'REMOVE_BOOK':
      return [
        ...state.slice(0, state.indexOf(action.book)),
        ...state.slice(state.indexOf(action.book) + 1),
      ];
    case 'SET_BOOKS':
      return action.books.map(book => ({
        title: book.title,
        category: book.category,
        id: generateId(),
      }));
    default:
      return state;
  }
};

export default booksReducer;
