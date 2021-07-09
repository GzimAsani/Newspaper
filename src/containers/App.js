import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar';
import UserShow from './userShow';
import Main from '../components/main';
import ShowPage from '../components/showPage';

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/posts" exact component={ShowPage} />
        <Route path="/show/:id" exact component={UserShow} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
