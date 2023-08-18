import "../assets/scss/header.scss";

import { Link, useLocation } from "react-router-dom";

import React from "react";

const Header = () => {
  const currentLocation = useLocation();
  return (
    <header>
      <img src="/logo.svg" width="210" height="68" loading="lazy" alt="logo" />
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={
                currentLocation.pathname === "/" ? "active link" : "link"
              }
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to={`profil`}
              className={
                currentLocation.pathname === "/profil" ? "active link" : "link"
              }
            >
              Profil
            </Link>
          </li>
          <li>
            <Link
              to={`params`}
              className={
                currentLocation.pathname === "/params" ? "active link" : "link"
              }
            >
              Réglage
            </Link>
          </li>
          <li>
            <Link
              to={`group`}
              className={
                currentLocation.pathname === "/group" ? "active link" : "link"
              }
            >
              Communauté
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
