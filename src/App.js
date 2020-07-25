import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">Checkout</Route>
        <Route path="/login">Login</Route>
        <Route path="/"><Header/></Route>
      </Switch>
    </Router>
  );
}

export default App;
