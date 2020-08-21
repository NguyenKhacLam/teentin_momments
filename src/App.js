import React from "react";
import "./styles/App.css";
import Upload from "./components/Upload";
import Body from "./components/Body";
import Login from "./components/Login";
import ShowDetails from "./components/ShowDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app"></div>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/image/:imageId">
          <ShowDetails />
        </Route>
        <Route path="/upload/">
          <Upload />
        </Route>
        <Route path="/">
          <Body />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
