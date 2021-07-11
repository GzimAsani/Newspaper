import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../actions';

class getUsers extends React.Component {
  componentDidMount() {
    this.props.fetchUsers(this.props.userId);
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
  }
}

const getMapToProps = (state) => ({ users: state.users });

export default connect(getMapToProps, { fetchUsers })(getUsers);
