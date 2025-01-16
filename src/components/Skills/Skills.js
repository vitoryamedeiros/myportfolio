import React from "react";
import "./Skills.css";
import stack__java from '../../assets/stacks/stack__java.svg'
import stack__python from '../../assets/stacks/stack__python.svg'
import stack__typescript from '../../assets/stacks/stack__typescript.svg'
import stack__nodejs from '../../assets/stacks/stack__nodejs.svg'
import stack__react from '../../assets/stacks/stack__react.svg'
import stack__mysql from '../../assets/stacks/stack__mysql.svg'
import stack__git from '../../assets/stacks/stack__git.svg'
import stack__figma from '../../assets/stacks/stack__figma.svg'


const Skills = () => (
    <div className="skills__container">
      <div className="skills__content">
        <img className="stack__java" src={stack__java} alt="Java" />
        <img className="stack__python" src={stack__python} alt="Python" />
        <img className="stack__typescript" src={stack__typescript} alt="Typescript" />
        <img className="stack__nodejs" src={stack__nodejs} alt="NodeJS" />
        <img className="stack__react" src={stack__react} alt="React" />
        <img className="stack__mysql" src={stack__mysql} alt="MySQL" />
        <img className="stack__git" src={stack__git} alt="Git" />
        <img className="stack__figma" src={stack__figma} alt="Figma" />
      </div>
  
    </div>
  
  );
export default Skills;
