const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        action.book,
      ];
    case 'REMOVE_BOOK':
      return [
        ...state.slice(0, state.indexOf[action.book]),
        ...state.slice(state.indexOf[action.book] + 1),
      ];
    default:
      return state;
  }
};

export default booksReducer;
