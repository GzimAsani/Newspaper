export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_REDUCERS':
      return action.payload;

    default:
      return state;
  }
};
