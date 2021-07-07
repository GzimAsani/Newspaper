import React from 'react';
import GetPosts from '../components/getPosts';
import Navbar from '../components/Navbar';
import UserShow from '../components/userShow';
import Main from '../components/Main';
import ShowPage from './showPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        < Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/posts" exact component={ShowPage} />
          <Route path="/show/:id" exact component={UserShow} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;