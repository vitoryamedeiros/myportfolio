import React from "react";
import "./Banner.css";
import "../../index.css";

import profilePic from '../../assets/banner/banner__profilePic.png'
import textPortfolio from '../../assets/banner/banner__textPortfolio.png'
import banner__tituloPortfolio from '../../assets/banner/banner__tituloPortfolio.svg'
import banner__arrowdonw from '../../assets/banner/banner__arrowdonw.svg'

const Banner = () => (
  <div className="banner__container">
    <div className="banner__title__content">
      <h2 className="banner__text name lightfont">Vitorya Medeiros</h2>
      <img className="banner__tituloPortfolio" src={banner__tituloPortfolio} alt="Titulo Portfolio" />
      <h3 className="banner__text profession lightfont">Software Developer and UX/UI Designer</h3>
    </div>
    <div className="banner__elements">
      <img className="banner__profilePic" src={profilePic} alt="Minha Foto" />
      <img className="banner__textPortfolio" src={textPortfolio} alt="Text Portfolio" />
    </div>

    <a href="#about">
      <img className="banner__arrowdonw" src={banner__arrowdonw} alt="Arrow Donw" />
    </a> 
  </div>
    
);

export default Banner;
