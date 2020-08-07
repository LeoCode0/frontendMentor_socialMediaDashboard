import React, { useContext } from "react";

import contextTheme from "../Context";

import "../css/Header.css";

export const Header = () => {
  let header = 'header';
  const { setMode } = useContext(contextTheme);
  const { mode } = useContext(contextTheme);
  const changeTheme = (event) => {
    const element = event.target;
    if (mode === "light") {
      element.classList.add("active");
      document.body.classList.add("dark")
      document.getElementsByClassName("header__darkMode--box")[0].classList.add("activeBox")
      setMode("dark");
    } else {
      element.classList.remove("active");
      document.getElementsByClassName("header__darkMode--box")[0].classList.remove("activeBox")
      document.body.classList.remove("dark")
      setMode("light");
    }
  };

  if (mode === "light") {
    header += "";
  } else {
    header += " dark";
  }

  return (
    <header className={header}>
    <div className="principal">
      <h2 className="header__title">Social Media Dashboard</h2>
      <span className="header__totalFollowers">Total Followers: 23,004</span>
    </div>
      <div className="header__darkMode">
        <span className="header__darkMode--span">Dark Mode</span>
        <div className="header__darkMode--box">
          <button
            className="header__darkMode--button"
            onClick={(e) => changeTheme(e)}
          ></button>
        </div>
      </div>
    </header>
  );
};
