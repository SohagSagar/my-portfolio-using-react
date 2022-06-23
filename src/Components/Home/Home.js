import React from 'react';
import './Home.css';
import coder from '../../resourses/textimage.gif';


const Home = () => {
    return (
        <div id='home' className='bg-white lg:px-12 pb-8'>

            <section className='home-section flex justify-between items-center pt-16'>
                <div className='intro-part'>
                    <h6 className='text-xl '>Hello,</h6>
                    <h1 className='text-[100px] '>I Am <span className='text-primary'>Sohag</span></h1>
                    <h3 className='text-3xl '>A Software Engineer</h3>

                    <p className='mt-[50px] font-normal text-xl text-justify'>I love to develop morden web application and focus mostly on frontend development. I like to craft  solid and scalable frondend products with great user experience.</p>

                    <div>
                        <a className="btn btn-primary rounded-full w-48 h-[25px] mt-5 hover:btn-secondary" href="https://drive.google.com/file/d/1lXb-xTECp_PJ57Rm5SNzyBqgVnYK3M_G/view?usp=sharing" target="_blank" rel="noopener noreferrer">Get My Resume</a>
                    </div>
                </div>

                <div className='image-part'>
                    <img src={coder} alt="" />
                </div>
                
            </section>
           
        </div>
    );
};

export default Home;