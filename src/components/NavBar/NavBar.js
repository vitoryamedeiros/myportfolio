import React from "react";
import "./NavBar.css";
// import header__whiteStar from '../../assets/header__whiteStarCrab.png'

const NavBar = () => (
  <header className="header__container">
    <nav className="navbar__container">
      <ul className="ul__container strongfont">
        <li className="ul__element"><a href="#home">Home</a></li>
        <li className="ul__element"><a href="#about">About</a></li>
        <li className="ul__element"><a href="#jobs">Jobs</a></li>
        <li className="ul__element"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    {/* <img className="header__whiteStar" src={header__whiteStar} alt="Estrela Branca" /> */}
  </header>
);

export default NavBar;
