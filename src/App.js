import React from "react";
import { Header, Footer } from "components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <Router>
          <Switch>
            <Route path="/login">Login</Route>
            <Route path="/list">List</Route>
            <Route path="/">Home</Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
