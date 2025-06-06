import React from 'react';
import './componentStyles/SkillsSection.css';
import SkillData from '../data/skills.json';

const SkillsSection = () => {

    return (
        <>

        <section className="skill-container">
            <h1>Skills</h1>

            {
                SkillData.map((category, index) => (
                    <React.Fragment key={index}>
                        <h2>{category.skillType}</h2>
                        <p>{category.skillDesc}</p>
                        <div className="skill-item-container">
                            {
                                category.skillList.map((skill, i) => (
                                    <a href={skill.skillLink} key={i} target='_blank' rel="noopener noreferrer">{skill.skillName}</a>
                                ))
                            }
                        </div>
                    </React.Fragment>
                ))
            }
        </section>
        
        </>
    )
};

export default SkillsSection;