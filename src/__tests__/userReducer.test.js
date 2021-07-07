import userReducer from "../reducers/userReducer";

test('Reducer can FETCH_TODOS', () => {
  const action = { type: 'FETCH_USERS' };
  const state = []
  expect(userReducer(state, action)).toEqual(
    []
  );
});