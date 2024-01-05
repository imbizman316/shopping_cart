import React from "react";
import App from "./App";
import Checkout from "./components/Checkout";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Assemble() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path= "/" exact="true" Component={App}/>
          <Route path= "/shopping_cart" exact="true" Component={App}/>
          <Route path= "/checkout" exact="true" Component={Checkout}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}