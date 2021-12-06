import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles/main.css";

import Navbar from "./components/navBar";
import GoogleApiWrapper from "./components/map/googlemap";
import Main from "./components/wootlab/home";
import RegistrationForm from "./components/wootlab/elements/registrationForm";
import VehicleLocation from "./components/wootlab/elements/location";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/maps" component={GoogleApiWrapper} />
        <Route exact path="/register" component={RegistrationForm} />
        <Route exact path="/location" component={VehicleLocation} />
      </Switch>
    </div>
  );
}

export default App;
