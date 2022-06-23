import React from 'react';
import './Home.css';
import coder from '../../resourses/textimage.gif';
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const Home = () => {

    // typeWriter config
    const { text } = useTypewriter({
        words: ['Web Developer', 'Designer', 'React Developer',],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 35,
        delaySpeed: 1000

    })

    return (
        <div id='home' className='bg-white lg:px-12 lg:pb-8 pb-16'>

            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">

                    <img className='w-[500px]' alt='' src={coder} />

                    <div>

                        <h1 className="text-3xl sm:mt-2 lg:text-6xl text-accent font-bold uppercase home-heading ">Sohag Sagar</h1>

                        <hr className='border-b-4 border-primary w-28 my-6' />

                        <h3 className='text-xl  lg:text-4xl text-accent font'>Professional <span className='font-bold '>{text}</span><Cursor /></h3>

                        <p className='mt-[20px] lg:mt-[50px] font-normal text-sm lg:text-xl text-justify text-accent'>Love to develop morden web application and mostly focus on frontend development using react and like to craft  solid and scalable frondend products with great user experience.</p>

                        <div className='mt-5 lg:mt-5'>
                            <a className="btn btn-primary rounded-full w-48  hover:btn-secondary " href="https://drive.google.com/file/d/1hS0FTN0t1FeXYNmlHQo8a4ozqqbLVuZI/view?usp=sharing" target="_blank" rel="noopener noreferrer">Get My Resume</a>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;