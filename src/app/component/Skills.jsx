import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './skills.css'

 
import { skillsData } from '../data/skillsdata'
import { skillsImage } from '../data/skillsimages'

function Skills() {

     

    const skillBoxStyle = {
        backgroundColor: ' rgb(33, 33, 33)',
        boxShadow: `0px 0px 30px #f565394d `
    }

    return (
        <div className="skills  "  >
            <div className="skillsHeader">
                <h2 style={{color: 'rgb(245, 101, 57)'}}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)}   />
                                <h3 style={{color: 'white'}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills