import React from "react";
import "./NavBar.css";
// import header__whiteStar from '../../assets/header__whiteStarCrab.png'
import navbar__starSeparator from '../../assets/header/navbar__starSeparator.svg'

const NavBar = () => (
  <header className="header__container">
    <nav className="navbar__container">
      <ul className="ul__container strongfont">
        <li className="ul__element"><a href="#home">home</a></li>
          <img className="navbar__starSeparator" src={navbar__starSeparator} alt="Navbar Separator" />
        <li className="ul__element"><a href="#about">about</a></li>
          <img className="navbar__starSeparator" src={navbar__starSeparator} alt="Navbar Separator" />
        <li className="ul__element"><a href="#works">works</a></li>
          <img className="navbar__starSeparator" src={navbar__starSeparator} alt="Navbar Separator" />
        <li className="ul__element"><a href="#contact">contact</a></li>
      </ul>
    </nav>
    {/* <img className="header__whiteStar" src={header__whiteStar} alt="Estrela Branca" /> */}
  </header>
);

export default NavBar;
