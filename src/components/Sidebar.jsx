import "../assets/scss/sidebar.scss";

import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <img
          src="/pictures/icon.svg"
          width="64"
          height="64"
          loading="lazy"
          alt="logo"
        />
        <img
          src="/pictures/icon1.svg"
          width="64"
          height="64"
          loading="lazy"
          alt="logo"
        />
        <img
          src="/pictures/icon2.svg"
          width="64"
          height="64"
          loading="lazy"
          alt="logo"
        />
        <img
          src="/pictures/icon3.svg"
          width="64"
          height="64"
          loading="lazy"
          alt="logo"
        />
      </div>
      <p>Copiryght, SportSee 2020</p>
    </div>
  );
};

export default Sidebar;
