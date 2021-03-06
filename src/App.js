import React from "react";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/PicSome">
          <Photos />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}
