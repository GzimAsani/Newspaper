import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  render() {
    return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button className="navbar-brand text-success btn btn-outline-info "><Link to={'/'}> BACK </Link></button>
            <button><Link to={'/posts'}>POSTS</Link></button>
          </div>
          <div>
          </div>
        </nav>
      </div>
    )
  };
}

export default Navbar;