import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/newspaper.jpg'
class Main extends React.Component {

  render() {
    return (
      <div className=" text-center">
        <h1 className="text-success">
          Unnamed NewsPaper
        </h1>
        <img src={Image} className="img-fluid" alt="Photo" />
      </div>
    );
  };
};

export default Main;