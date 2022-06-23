import React from 'react';
import './About.css';
import aboutBg from '../resourses/aboutBg.jpg';
import { TbChevronsRight } from 'react-icons/tb';
import { AiFillAlert } from 'react-icons/ai';


const AboutMe = () => {
    return (
        <div id='about' className='pb-10'>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#333333" fillOpacity="1" d="M0,96L120,85.3C240,75,480,53,720,48C960,43,1200,53,1320,58.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>

            

            <div className='mt-[-220px]'>
                <div className="hero min-h-screen bg-secondary">
                
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={aboutBg} className="lg:max-w-lg rounded-lg shadow-2xl" />
                        <div className='text-white'>
                            
                            <h1 className="text-3xl font-bold">I'm a tech Enthogious person and loved <br /> to play with new technologies...</h1>
                            <p className="py-6 text-lg text-justify">After done my graduation in Computer Science and Engineering I focus in web development as my career and loved to work  in frontend development because of experiencing different kind of user interface. Currently I exploring React and it's relavent libraries. </p>

                            <div className='text-lg'>
                                <p className='mr-2 pb-3'><TbChevronsRight className='rounded-full text-secondary bg-white text-2xl inline' /><span className='p-2'>Completed 10+ project using React</span></p>

                                <p className='mr-2 pb-3'><TbChevronsRight className='rounded-full text-secondary bg-white text-2xl inline' /><span className='p-2'>Backend Technology Node js, Express Js, MongoDB</span></p>

                                <p className='mr-2 pb-3'><TbChevronsRight className='rounded-full text-secondary bg-white text-2xl inline' /><span className='p-2'>Exceptional work quality</span></p>

                            </div>
                            <div className='py-6'>
                                <button className="btn btn-primary rounded-full btn-outline w-36">Hire me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default AboutMe;