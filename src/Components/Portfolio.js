import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import menufacturerImg from '../resourses/portfolio_images/menufacture_web.png';
import Loading from './Loading';
import './Portfolio.css';
import ProjectCard from './ProjectCard';

const Portfolio = () => {

    const [projects, setProjects] = useState([])

    // const {data:projectInfo,isLoading}=useQuery('projects',()=>fetch('http://localhost:5000/project-info').then(res=>res.json()));

    useEffect(() => {
        fetch('http://localhost:5000/project-info')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    if (projects.length < 0) {
        return <Loading />
    }


    const allBtn = () => {

        fetch(`http://localhost:5000/project-info`)
            .then(res => res.json())
            .then(data => {
                const allProjects = data;
                console.log(allProjects);
                console.log('all clicked');
                if (!allProjects) {
                    return <Loading />
                }
                setProjects(allProjects)
            })

    }


    const fullStack = () => {
        const type = 'Full-stack';
        fetch(`http://localhost:5000/project-info/${type}`)
            .then(res => res.json())
            .then(data => {
                const allProjects = data;
                if (allProjects.length < 0) {
                    return <Loading />
                }
                setProjects(allProjects);
            })
    }

    const frontendBtn = () => {
        const type = 'Frontend';
        fetch(`http://localhost:5000/project-info/${type}`)
            .then(res => res.json())
            .then(data => {
                const allProjects = data;
                if (allProjects.length < 0) {
                    return <Loading />
                }
                setProjects(allProjects);
            })
    }

    const apiBtn = () => {
        const type = 'API';
        fetch(`http://localhost:5000/project-info/${type}`)
            .then(res => res.json())
            .then(data => {
                const allProjects = data;
                if (allProjects.length < 0) {
                    return <Loading />
                }
                setProjects(allProjects);
            })
    }

    return (
        <div id='portfolio' className='lg:px-12 py-28'>
            <div className=''>
                <h1 className=' whitespace-nowrap  uppercase text-4xl font-semibold border-b-4 border-primary pb-2 w-60'> Portfolio</h1>
                <h2 className='font-bold text-[50px] leading-tight '>My Featured Works</h2>
            </div>

            <div className='flex justify-center items-start my-12 font-semibold'>

                <button onClick={allBtn} class="btn btn-ghost">ALL</button>
                <button onClick={fullStack} class="btn btn-ghost">FULL STACK</button>
                <button onClick={frontendBtn} class="btn btn-ghost">FRONTEND</button>
                <button onClick={apiBtn} class="btn btn-ghost">API</button>




            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 justify-items-center">
                {
                    projects.map(project => <ProjectCard
                        key={project._id}
                        project={project}
                    ></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Portfolio;