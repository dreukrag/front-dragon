import React from "react";
import { Header, Footer } from "components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import styles from "./App.module.scss";
import PrivateRoute from "components/PrivateRoute";
function App() {
  return (
    <Router>
      <div className={styles.main}>
        <Header />
        <div className={styles.content}>
          <Switch>
            <PrivateRoute path="/login">Login</PrivateRoute>
            <Route path="/list">List</Route>
            <Route path="/home">Home</Route>
            <Route exact path="/">
              <Redirect
                to={{
                  pathname: "/home",
                }}
              />
            </Route>
            <Route>
              <Redirect
                to={{
                  pathname: "/404",
                }}
              />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
