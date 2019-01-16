import React, { Component } from 'react';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import Animals from './components/Animals';
import FruitVegs from './components/FruitVegs';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/(animals)?" component={Animals} />
          <Route exact path="/fruitVeg" component={FruitVegs} />
        </Switch>
      </React.Fragment>
    );
  }
}
