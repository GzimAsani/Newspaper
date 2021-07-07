import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Link } from 'react-router-dom';

class getUsers extends React.Component {
  componentDidMount() {
    this.props.fetchUsers(this.props.userId)
  }
  render() {
    const user = this.props.users.find((user) => user.id === this.props.userId);

    if (!user) {
      return null;
    }
    return (
      <Link to={`/show/${user.id}`} id={user.id} className="header">
        <button className="btn btn-outline-warning">
          {user.name}
        </button>
      </Link>

    );
  };
};

const getMapToProps = (state) => {
  return { users: state.users }
}

export default connect(getMapToProps, { fetchUsers })(getUsers);