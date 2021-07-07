import React from 'react';
import { connect } from 'react-redux';
import StatusFilter from './statusFilter';
import { fetchTodos } from '../actions';
import GetUsers from './getUsers';

class UserTodo extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  returnTodos = () => this.props.todos.map((todo) => (
    <div className="card container d-flex" key={todo.id}>
      <div className="card-body">
        <div className="d-flex">
          <h3>Title:</h3>
          <h3 className="card-title text-danger">{todo.title}</h3>
        </div>
        <div className="card-text text-success">
          Completed:
          {todo.completed.toString()}
        </div>
        Author:
        {' '}
        <GetUsers userId={todo.userId} />
      </div>
    </div>
  ))

  render() {
    return (
      <div>
        <StatusFilter />
        <div>
          {this.returnTodos()}
        </div>

      </div>
    );
  }
}

const getMapToProps = (state) => ({ todos: state.todos });

export default connect(getMapToProps, { fetchTodos })(UserTodo);
