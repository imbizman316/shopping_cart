import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigator () {

  return (
    <div>
      <h2>Navigator</h2>
      <div>
        <NavLink exact="true" to="/" activeClassName="navActive">
          <span>Home</span>
        </NavLink>
      </div>
      <div>
        <NavLink exact="true" to="/checkout" activeClassName="navActive">
          <span>Checkout</span>
        </NavLink>
      </div>
    </div>
  )
}