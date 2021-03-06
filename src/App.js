import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

export default App;
