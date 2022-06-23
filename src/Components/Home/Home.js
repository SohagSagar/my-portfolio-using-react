import React from 'react';
import './Home.css';
import coder from '../../resourses/textimage.gif';

import { useTypewriter, Cursor } from 'react-simple-typewriter'




const Home = () => {

    const { text } = useTypewriter({
        words: ['Web Developer', 'Designer', 'React Developer',],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 35,
        delaySpeed: 1000

    })

    return (
        <div id='home' className='bg-white lg:px-12 pb-8'>

            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='w-[500px]' alt='' src={coder} />
                    <div>
                        <h1 class="text-6xl text-accent font-bold uppercase home-heading ">Sohag Sagar</h1><hr className='border-b-4 border-primary w-28 my-6' />
                        <h3 className='text-4xl text-accent font'>Creative <span className='font-bold '>{text}</span><Cursor /></h3>

                        <p className='mt-[50px] font-normal text-xl text-justify text-accent'>Love to develop morden web application and mostly focus on frontend development using react and like to craft  solid and scalable frondend products with great user experience.</p>

                        <div>
                            <a className="btn btn-primary rounded-full w-48 h-[25px] mt-5 hover:btn-secondary" href="https://drive.google.com/file/d/1hS0FTN0t1FeXYNmlHQo8a4ozqqbLVuZI/view?usp=sharing" target="_blank" rel="noopener noreferrer">Get My Resume</a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;