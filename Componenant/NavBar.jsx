import React, { useState, useEffect } from "react";
import "./NavBarStyle.scss";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="Navigation">
        <NavLink to="/">
          <h1> Portfolio </h1>
        </NavLink>

        {isMobile && (
          <button className="toggle-button" onClick={toggleMenu}>
            ☰
          </button>
        )}

        <ul className={`Nav-Menu ${isMenuOpen ? "show" : ""}`}>
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
