import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import menufacturerImg from '../resourses/portfolio_images/menufacture_web.png';
import Loading from './Loading';
import './Portfolio.css';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
    const {data:projects,isLoading}=useQuery('projects',()=>fetch('http://localhost:5000/project-info').then(res=>res.json()));
    
    
    if(isLoading){
       return <Loading/>
    }
    return (
        <div id='portfolio' className='lg:px-12 py-28'>
            <div className=''>
                <h1 className=' whitespace-nowrap  uppercase text-4xl font-semibold border-b-4 border-primary pb-2 w-60'> Portfolio</h1>
                <h2 className='font-bold text-[50px] leading-tight '>My Featured Works</h2>
            </div>

            <div className='flex justify-center items-start my-12 font-semibold'>

                <button class="btn btn-ghost">ALL</button>
                <button class="btn btn-ghost">FULL STACK</button>
                <button class="btn btn-ghost">API</button>
                
                

            </div>
            {
                // <Loading/>
            }

            <div>
                {
                    projects.map(project=><ProjectCard
                        key={project._id}
                        project={project}
                    ></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Portfolio;