import React, { useEffect, useState } from 'react';
import SkillCard from './SkillCard';
import './Skill.css';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch('/skill.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])
    return (
        <div id='skills' className='px-4 lg:px-12  py-16 scroll-mt-[80px]'>
            <h1 className='text-secondary uppercase text-2xl lg:text-4xl font-semibold border-b-4 border-primary pb-2 w-44'> Skills</h1>
            <h2 className='font-bold text-[25px] lg:text-[50px] leading-tight text-accent'>What My Programming <br />skills included?</h2>

            <div className="hero text-accent">
                <div className="skill-content flex-col lg:flex-row-reverse">

                    <div className='all-skills py-10 grid lg:grid-cols-6 grid-cols-3 gap-3 lg:gap-4 justify-items-center'>

                        {
                            skills.map((skill, index) => <SkillCard key={index} skill={skill}></SkillCard>)
                        }

                    </div>
                    <div className='lg:w-[400px]'>
                        <p className="py-6 text-lg lg:text-xl">I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.</p>
                        <div>
                            <button className="btn btn-primary rounded-full hover:bg-secondary hover:text-white border-0 w-36">Hire me</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Skills;