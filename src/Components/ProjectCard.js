import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { _id,name, featuredImg, liveLink } = project;
    return (
        <div class="card card-compact w-96 h-[200px] bg-base-100 shadow-xl container">
            <figure><img className='h-[200px]' src={featuredImg} alt="Shoes" /></figure>
            <div className='overlay'>

                <div className='text-container text-center '>
                    <p className='text-[16px] text-primary mb-5'>{name}</p>
                    <div className='flex item-center justify-center'>
                        <button class="btn btn-primary rounded-full bg-primary hover:bg-secondary hover:text-primary w-36 mr-2"><Link to={`/details/${_id}`}>Details</Link></button>
                        <a target="_blank" rel="noreferrer" href={liveLink} class="btn btn-primary rounded-full btn-outline w-36">Live</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;