import postReducer from '../reducers/postReducer';

test('Reducer can FETCH_TODOS', () => {
  const action = { type: 'FETCH_REDUCERS' };
  const state = []
  expect(postReducer(state, action)).toEqual(
    undefined
  );
});