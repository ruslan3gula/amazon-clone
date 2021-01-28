import React, { useEffect } from "react";
import "./styles.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { StateProvider } from "./StateProvider";
import reducer from "./reducer";
import { initialState } from "./reducer";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  // const [state, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      // if (authUser) {
      //   // the user just logged in / the user was logged in

      //   dispatch({
      //     type: "SET_USER",
      //     user: authUser
      //   });
      // } else {
      //   // the user is logged out
      //   dispatch({
      //     type: "SET_USER",
      //     user: null
      //   });
      // }
    });
  }, []);
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </StateProvider>
  );
}
