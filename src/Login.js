import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
// import firebase from "./firebase";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

export default function Login() {
  const [state, dispatch] = useStateValue();
  const history = useHistory();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(login, password)
      .then((auth) => {
        console.log("auth----->", auth);
        console.log(state);
        dispatch({ type: "LOG_IN", user: auth });
        history.push("/");
      })
      .catch((error) => alert(error.message));
    //loging to firebase
  };
  const register = (e) => {
    e.preventDefault();
    //loging to firebase

    auth()
      .createUserWithEmailAndPassword(login, password)
      .then((auth) => {
        console.log(auth);
        if (auth) history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login_container ">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            onChange={(e) => setLogin(e.target.value)}
            value={login}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="login_signInButton" onClick={signIn}>
            Sign in
          </button>
          <p>
            By continuing, you agree to Amazon Clone 's Conditions of Use and
            Privacy Notice.
          </p>
          <button className="login_registerButton" onClick={register}>
            Create Amazon Clone account
          </button>
        </form>
      </div>
    </div>
  );
}
