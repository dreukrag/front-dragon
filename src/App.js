import React from "react";
import { Header, Footer, PrivateRoute } from "components";
import Login from "pages/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import styles from "./App.module.scss";
import DragonList from "pages/DragonList";
import Home from "pages/Home";
function App() {
  return (
    <Router>
      <div className={styles.main}>
        <Header />
        <div className={styles.content}>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/list">
              <DragonList />
            </PrivateRoute>
            <Route path="/home"><Home /></Route>
            <Route path="/">
              <Redirect
                to={{
                  pathname: "/home",
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
