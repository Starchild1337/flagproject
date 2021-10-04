import React from "react";
import Countries from "./components/Countries/Countries";
import Navbar from "./components/Navbar/Navbar";
import SelectedCountry from "./components/SelectedCountry/SelectedCountry";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/flagproject">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Countries />
          </Route>
          <Route exact path="/country/:name">
            <SelectedCountry />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
