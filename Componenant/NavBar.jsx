  import React from "react";
  import "./NavBarStyle.css";
  import { NavLink } from "react-router-dom";

  function NavBar() {
    return (
      <>
        <div className="Navigation">
          <NavLink to="/">
            <h1> Portfolio change made </h1>
          </NavLink>
          <ul className="Nav-Menu">
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/About"> About </NavLink>
            </li>
            <li>
              <NavLink to="/Contact"> Contact </NavLink>
            </li>
            <li>
              <NavLink to="/Project"> Project </NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }

  export default NavBar;
