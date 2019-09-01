import React, { Component } from "react";
import Navi from "../navi/Navi";
import WeatherInformation from "../weather/WeatherInformation";
import FormPage from '../form/FormPage'
import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
           <Navi />
           <WeatherInformation />
           <FormPage/>

     
        <Switch>
          <Route exact path="/" />
        </Switch>
      </div>
    );
  }
}
