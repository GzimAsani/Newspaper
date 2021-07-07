import jsonplaceholder from '../api/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get('/posts');

  dispatch({ type: 'FETCH_REDUCERS', payload: response.data })
};

export const fetchUser = (id) => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data })
};

export const fetchUsers = (id) => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USERS', payload: response.data })
};

export const fetchTodos = () => async dispatch => {
  const response = await jsonplaceholder.get('/todos');

  dispatch({ type: 'FETCH_TODOS', payload: response.data })
};

export const filterUsers = filter => ({
  type: 'FILTER_USERS',
  filter,
});