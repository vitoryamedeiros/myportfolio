import React from "react";
import "./About.css";

const About = () => (
    <div className="about__container">
        <div className="about__spanArea">
            <div className="about__contactIcons"></div>
            <div className="about__phrase"><p>"O segredo para avançar é começar."Mark Zuckerberg</p></div>
        </div>

        <div className="about__content">
            <div className="about__textArea">
                <p>
                    Apaixonada por tecnologia desde os 14 anos, mergulhei no mundo de T.I com o Ensino Medio-Tecnico, e atualmente sou graduanda de Analise e Desenvolvimento de Sistemas.
                </p>
                <p>
                    Aspirante a UX/UI Design, busco sempre praticar minha criatividade e aperfeiçoar meus conhecimentos na área.
                </p>
            </div>

            <div className="about__softSkillsArea">
                <div>
                    <span>#text</span>
                    {/* criar a box/retangulo com webkit */}
                </div>
                <div>
                    <span>#text</span>
                    {/* criar a box/retangulo com webkit */}
                </div>
                <div>
                    <span>#text</span>
                    {/* criar a box/retangulo com webkit */}
                </div>
                <div>
                    <span>#text</span>
                    {/* criar a box/retangulo com webkit */}
                </div>
            </div>
        </div>
    </div>
);

export default About;
7