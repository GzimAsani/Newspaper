import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button type="button" className="navbar-brand text-success btn btn-outline-info "><Link to="/"> BACK </Link></button>
          <button type="button"><Link to="/posts">POSTS</Link></button>
        </div>
        <div />
      </nav>
    </div>
  );
}

export default Navbar;
