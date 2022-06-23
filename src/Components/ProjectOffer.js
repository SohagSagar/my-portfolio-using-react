import React from 'react';
import { HashLink } from 'react-router-hash-link';

const ProjectOffer = () => {
    return (
        <div className="card w-[1100px] bg-primary shadow-xl mt-[-470px] hidden lg:block mx-auto ">
            <div className="py-12 flex justify-around items-center">
                <p className='text-3xl font-bold'>Start a project</p>
                <p className='text-center text-lg'>Interested in working together? We should<br/>
                 queue up a chat. I’ll buy the coffee.</p>

                <button className="btn btn-secondary rounded-full btn-outline w-36"><HashLink to="/#contact">Hire Me</HashLink></button>

                


            </div>
        </div>
    );
};

export default ProjectOffer;