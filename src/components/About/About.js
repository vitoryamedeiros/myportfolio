import React from "react";
import "./About.css";
import "../../index.css";

import about__contactIconGithub from '../../assets/about/about__contactIconGithub.svg'
import about__contactIconLinkedin from '../../assets/about/about__contactIconLinkedin.svg'
import about__contactIconInstagram from '../../assets/about/about__contactIconInstagram.svg'
import about__contactIconWhatsapp from '../../assets/about/about__contactIconMail.svg'
import about__star from '../../assets/about/about__star.svg'

const About = () => (
    <div className="about__container" id="about">
        <div className="about__spanArea">
            <div className="about__contactIcons">
                <a href="https://github.com/vitoryamedeiros" target="blank">
                    <img src={about__contactIconGithub} alt="Github Icon" />
                </a>   
                <a href="https://www.linkedin.com/in/vitoryamedeiros/"  target="blank">
                    <img src={about__contactIconLinkedin} alt="Linkedin Icon" />   
                </a>
                <a href="https://www.instagram.com/_vitoryamedeiros/"  target="blank">
                    <img src={about__contactIconInstagram} alt="Instagram Icon" />   
                </a>
                <a href="mailto:vitoryamedeiros05@gmail.com" target="blank">
                    <img src={about__contactIconWhatsapp} alt="Whatsapp Icon" />                       
                </a>

            </div>
            <div className="about__phrase"><p>"O segredo para avançar é começar." <br /> Mark Zuckerberg</p></div>
        </div>

        <div className="about__content">
            <div className="about__textArea">
                <p className="about__text line formation">
                    Apaixonada por tecnologia, mergulhei de cabeça no mundo de T.I aos <strong>14 anos</strong> com o Ensino Medio-Tecnico, e atualmente sou graduanda em  <br></br><strong> Analise e Desenvolvimento de Sistemas</strong> pelo <strong>Porto Digital</strong>.
                </p>
                <p className="about__text line design">
                    Aspirante a <strong>UX/UI Designer</strong>, busco sempre colocar em pratica minha <strong>criatividade</strong> e aperfeiçoar meus conhecimentos na área, <strong>me destacando profissionalmente</strong>.
                </p>
                <img className="about__star" src={about__star} alt="Star" />   

            </div>

            <div className="about__softSkillsArea">
                <div className="about__softSkillsBox lidership">
                    <span>#Liderança</span>
                </div>
                <div className="about__softSkillsBox">
                    <span>#Protagonismo</span>
                </div>
                <div className="about__softSkillsBox">
                    <span>#Comunicação</span>
                </div>
                <div className="about__softSkillsBox">
                    <span>#Empreendedorismo</span>
                </div>
            </div>
        </div>
    </div>
);

export default About;