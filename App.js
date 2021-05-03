import React from "react";
import Navigation from "./Navigation/Navigation.js";
import { createStore } from "react-hookstore";

createStore("userStore", {});
createStore("patientStore", {});

export default class App extends React.Component {
  render() {
    return <Navigation />;
  }
}
