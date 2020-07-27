import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase.js";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
        //logged in
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
        //redirect
      })
      .catch((e) => alert(e.message));
    event.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <p>
            <button onClick={login} className="login-btn">
              Continue
            </button>
          </p>
        </form>
        <p className="login-text">
          By continuing, you agree to Amazon's Conditions of use and privacy
        </p>
      </div>
      <div className="new-account">
        <p className="over-text">New to Amazon?</p>
        <hr />
        <button onClick={register} className="create-btn">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
