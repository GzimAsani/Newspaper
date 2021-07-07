export const initialState = {
  current: 'Select',
  possible: ['Select', 'Posts', 'Todos'],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_USERS':
      return { ...state, current: action.filter };
    default:
      return state;
  }
};

export default filterReducer;
