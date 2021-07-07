import {
  fetchPosts, fetchUser, fetchUsers, fetchTodos, filterUsers
} from '../actions';

test('changeFilter returns CHANGE_FILTER', () => {
  const filter = 'Select';
  expect(filterUsers(filter)).toEqual({ type: 'FILTER_USERS', filter });
});