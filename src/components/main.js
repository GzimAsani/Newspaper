import React from 'react';
import Image from '../assets/newspaper.jpg';

const Main = () => (
  <div className=" text-center">
    <h1 className="text-success">
      Unnamed NewsPaper
    </h1>
    <img src={Image} className="img-fluid" alt="Newspaper photo" />
  </div>
);

export default Main;
