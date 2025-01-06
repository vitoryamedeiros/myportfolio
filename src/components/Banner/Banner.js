import React from "react";
import "./Banner.css";
import profilePic from '../../assets/banner__profilePic.png'
import textPortfolio from '../../assets/banner__textPortfolio.png'
import tituloPortfolio from '../../assets/banner__tituloPortfolio.png'

const Banner = () => (
  <div className="banner__container">
    <div className="banner__title__content">
      <h2 className="banner__text name lightfont">Vitorya Medeiros</h2>
      <img src={tituloPortfolio} alt="Titulo Portfolio" />
      <h3 className="banner__text profession lightfont">Software and Web Developer</h3>
    </div>
    <div className="banner__elements">
      <img className="banner__profilePic" src={profilePic} alt="Minha Foto" />
      <img className="banner__textPortfolio" src={textPortfolio} alt="Text Portfolio" />
    </div>
  </div>

);

export default Banner;
