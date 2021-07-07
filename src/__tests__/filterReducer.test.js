import filterReducer, { initialState } from '../reducers/filterReducer';

test('initialState to be as expected', () => {
  expect(initialState).toEqual({
    current: 'Select',
    possible: ['Select', 'Posts', 'Todos'],
  });
});

test('filterReducer can change filter ', () => {
  const action = {
    type: 'CHANGE_FILTER',
    filter: 'Posts',
  };
  expect(filterReducer(initialState, action)).toEqual({
    ...initialState,
    current: 'Select',
  });
});
