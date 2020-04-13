import React, { Component } from "react";
import History from "./History";
import GroceryItems from "./GroceryItems";
import GroceryCart from "./GroceryCart";

export default class App extends Component {
  render() {
    return (
      <div id="app-container">
        <h1>Grocery Cart</h1>
        <History />
        <div id="grocery-container">
          <GroceryItems />
          <GroceryCart />
        </div>
      </div>
    );
  }
}
