import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';
import usersReducer from './usersReducer';
import filterReducer from './filterReducer';
import todosReducer from './todosReducer';

export default combineReducers({
  posts: postReducer,
  user: userReducer,
  users: usersReducer,
  filter: filterReducer,
  todos: todosReducer,
});
