import React from "react";

import '../css/Header.css'

export const Header = () => {
  return (
    <header className="header">
      <h2 className="header__title">Social Media Dashboard</h2>
      <span className="header__totalFollowers">Total Followers: 23,004</span>
      <div className="header__darkMode">
        <span className="header__darkMode--span">Dark Mode</span>
        <div className="header__darkMode--box">
          <button className="header__darkMode--button"></button>
        </div>
      </div>
    </header>
  );
};
