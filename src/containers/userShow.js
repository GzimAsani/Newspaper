import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class userShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    if (!this.props.user) {
      return <div>Loading!!!</div>;
    }

    return (
      <div className="d-flex">
        <div className="card justify-content-center">
          <div className="card-header">
            {this.props.user.username}
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Email: </strong>
              {' '}
              {this.props.user.email}
            </li>
            <li className="list-group-item">
              <strong>City: </strong>
              {this.props.user.address.city}
            </li>
            <li className="list-group-item">
              <strong>ZipCode: </strong>
              {' '}
              {this.props.user.address.zipcode}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ user: state.user[ownProps.match.params.id] });

export default connect(mapStateToProps, { fetchUser })(userShow);
