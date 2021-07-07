import usersReducer from '../reducers/usersReducer';

test('Reducer can FETCH_TODOS', () => {
  const action = { type: 'FETCH_USERS' };
  const state = [];
  expect(usersReducer(state, action)).toEqual(
    [undefined],
  );
});
