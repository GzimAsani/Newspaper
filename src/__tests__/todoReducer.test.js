import todosReducer from '../reducers/todosReducer';

test('Reducer can FETCH_TODOS', () => {
  const action = { type: 'FETCH_TODOS' };
  const state = [];
  expect(todosReducer(state, action)).toEqual(
    undefined,
  );
});
