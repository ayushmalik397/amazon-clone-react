import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout"><Header/><Checkout/></Route>
        <Route path="/login">Login</Route>
        <Route path="/"><Header/><Home/></Route>
      </Switch>
    </Router>
  );
}

export default App;
