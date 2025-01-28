import React from "react";
import "./Works.css";
import "../../index.css";

// importar as img do figma
import project__photo__derry from '../../assets/works/project__photo__derry.svg'
import project__photo__recificidades from '../../assets/works/project__photo__recificidades.svg'
import project__photo__undefined from '../../assets/works/work-popup.png'
// import project__photo__undefined1 from '../../assets/project__photo__undefined1.svg'
// import project__photo__undefined2 from '../../assets/project__photo__undefined2.svg'


const Works = () => (
    <div id="works" className="works__container">
        <div className="works__header">
            <span className="works__header__span strongfont">work // work // work // work // work // work // work // work // work // work // work</span>
        </div>
        <div className="works__content parent">
            {/* welcome to derry */}
            <div className="container__project big div1">
                <img className="project__photo" src={project__photo__derry} alt="Foto do Projeto Derry" />
                <div className="project__buttons">
                    <button className="button__project view">
                        <a href="">#View</a>
                    </button>
            
                    <button className="button__project code">
                        <a href="">#Code</a>
                    </button>
            
                </div>
            </div>

            {/* recificidades */}
            <div className="container__project big div2">
                <img className="project__photo" src={project__photo__recificidades} alt="Foto do Projeto Recificidades" />
                <div className="project__buttons">
                    <button className="button__project view">
                        <a href="">#View</a>
                    </button>
            
                    <button className="button__project code">
                        <a href="">#Code</a>
                    </button>
                
                </div>
            </div>

            {/* undefined */}
            <div className="container__project small div3">
                <img className="project__photo undefined" src={project__photo__undefined} alt="Foto do Projeto undefined" />
                <div className="project__buttons">
                    <button className="button__project view">
                        <a href="">#View</a>
                    </button>
            
                    <button className="button__project code">
                        <a href="">#Code</a>
                    </button>
                
                </div>
            </div>

            {/* undefined */}
            <div className="container__project small div4">
                <img className="project__photo undefined" src={project__photo__undefined} alt="Foto do Projeto undefined" />
                <div className="project__buttons">
                    <button className="button__project view">
                        <a href="">#View</a>
                    </button>
            
                    <button className="button__project code">
                        <a href="">#Code</a>
                    </button>
                
                </div>
            </div>

            {/* undefined */}
            <div className="container__project small div5">
                <img className="project__photo undefined" src={project__photo__undefined} alt="Foto do Projeto undefined" />
                <div className="project__buttons">
                    <button className="button__project view">
                        <a href="">#View</a>
                    </button>
            
                    <button className="button__project code">
                        <a href="">#Code</a>
                    </button>
                
                </div>
            </div>
        </div>
    </div>
);
export default Works;