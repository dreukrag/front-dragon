import React from "react";
import { Header, Footer } from "components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import styles from "./App.module.css";
import PrivateRoute from "components/PrivateRoute";
function App() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <Router>
          <Switch>
            <PrivateRoute path="/login">Login</PrivateRoute>
            <Route path="/list">List</Route>
            <Route path="/home">Home</Route>
            <Route path="/">
              <Redirect
                to={{
                  pathname: "/home",
                }}
              />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
