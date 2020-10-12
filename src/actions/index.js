import { v4 as generateId } from 'uuid';

export const createBook = ({ category, title }) => ({
  type: 'CREATE_BOOK',
  book: {
    category,
    title,
    id: generateId(),
  },
});

export const removeBook = book => ({
  type: 'REMOVE_BOOK',
  book,
});
