const filter = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.label;
    default:
      return state;
  }
};

export default filter;
