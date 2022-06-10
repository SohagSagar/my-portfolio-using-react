import React, { useEffect, useState } from 'react';
import js from '../resourses/skills/js.png';
import './Skill.css'
import SkillCard from './SkillCard';

const Skills = () => {
    const [skills,setSkills]=useState([]);
    useEffect(()=>{
        fetch('/skill.json')
        .then(res=>res.json())
        .then(data=>setSkills(data))
    },[])
    return (
        <div className='px-12 mt-16'>
            <h1 className='text-secondary uppercase text-4xl font-semibold border-b-4 border-primary pb-2 w-44'> Skills</h1>
            <h2 className='font-bold text-[50px] leading-tight '>What My Programming <br />skills included?</h2>
            

            <div className='all-skills py-10 grid lg:grid-cols-6 sm:grid-cols-2 gap-x-0 gap-y-4 justify-items-center   '>

                {
                    skills.map((skill,index)=><SkillCard key={index} skill={skill}></SkillCard>)
                }

            </div>
        </div>


    );
};

export default Skills;