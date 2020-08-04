import React, {useState} from "react";

import '../css/Header.css'

export const Header = () => {
  const [Mode, setMode] = useState(false)

  const handleClick = () => {
    const Button = document.getElementsByClassName("header__darkMode--button")[0];
    if (Mode === false){
      Button.classList.add('active')
      setMode(true)
    } else {
      Button.classList.remove('active')
      setMode(false)
    }
  }
  return (
    <header className="header">
      <h2 className="header__title">Social Media Dashboard</h2>
      <span className="header__totalFollowers">Total Followers: 23,004</span>
      <div className="header__darkMode">
        <span className="header__darkMode--span">Dark Mode</span>
        <div className="header__darkMode--box">
          <button className="header__darkMode--button" onClick={handleClick}></button>
        </div>
      </div>
    </header>
  );
};
