import React, { useEffect, useState } from 'react';
import js from '../resourses/skills/js.png';
import './Skill.css'
import SkillCard from './SkillCard';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch('/skill.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])
    return (
        <div id='skills' className='px-12 mt-16 mb-28'>
            <h1 className='text-secondary uppercase text-4xl font-semibold border-b-4 border-primary pb-2 w-44'> Skills</h1>
            <h2 className='font-bold text-[50px] leading-tight '>What My Programming <br />skills included?</h2>

            <div class="hero ">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div className='all-skills py-10 grid lg:grid-cols-6 sm:grid-cols-3  gap-4 justify-items-center   '>

                        {
                            skills.map((skill, index) => <SkillCard key={index} skill={skill}></SkillCard>)
                        }

                    </div>
                    <div className='lg:w-[400px]'>
                        <p class="py-6">I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.</p>
                        <div className='py-6'>
                            <button class="btn btn-primary rounded-full hover:bg-secondary hover:text-white border-0 w-36">Hire me</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Skills;