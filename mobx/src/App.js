import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import AddStudent from './Components/AddStudent';
import EditStudent from './Components/EditStudent';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path={"/"} exact={true} component={Home} />
          <Route path={"/add"} exact={true} component={AddStudent} />
          <Route path={'/edit/:id'} exact={true} component={EditStudent} />
        </Switch>
      </div>
    );
  }
}

export default App;
