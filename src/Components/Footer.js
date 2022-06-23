import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { MdMarkEmailRead } from 'react-icons/md';
import { HashLink } from 'react-router-hash-link';



const Footer = () => {
    return (
        <div className='bg-secondary mt-36 px-4 lg:px-12 pt-8 lg:pt-16'>

            <footer className="footer grid md:grid-cols-3 lg:flex lg:justify-between p-0 lg:p-10  text-white ">

                <div>
                    <span className="footer-title"></span>
                    <h1 className='text-2xl text-primary'>Sohag Sagar</h1>
                    <p className='text-lg leading-3 pb-1'>A Mern Stack Developer</p>
                    {/* <p className='text-md leading-3 pb-2'>Rampura,Dhaka,Bangladesh</p> */}
                    <div className='flex item-center justify-around text-xl '>

                        {/* social links */}
                        <a className='tooltip tooltip-bottom tooltip-primary' data-tip="Linkedin" href="https://www.linkedin.com/in/sohagsagar29/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='mr-4' /></a>

                        <a className='tooltip tooltip-bottom tooltip-primary' data-tip="Github" href="https://github.com/SohagSagar?tab=repositories" target="_blank" rel="noopener noreferrer"><AiFillGithub className='mr-4' /></a>

                        <a className='tooltip tooltip-bottom tooltip-primary' data-tip="Facebook" href="https://www.facebook.com/sagorsohag29" target="_blank" rel="noopener noreferrer"><RiFacebookFill className='mr-4' /></a>

                        <p className='tooltip tooltip-bottom tooltip-primary' data-tip="sagorsohag29@gmail.com"  ><MdMarkEmailRead /></p>

                    </div>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <HashLink className='hover:text-primary transition-all' to="/#services">Clean Code</HashLink>
                    <HashLink className='hover:text-primary transition-all' to="/#services">Web Development</HashLink>
                    <HashLink className='hover:text-primary transition-all' to="/#services">Responsive Design</HashLink>
                    <HashLink className='hover:text-primary transition-all' to="/#services">Assue Performance</HashLink>
                </div>
                <div>
                    <span className="footer-title">Useful Links</span>
                    <HashLink className='hover:text-primary transition-all' to="/#skills">Skills</HashLink>
                    <HashLink className='hover:text-primary transition-all' to="/#work-flow">Works Flow</HashLink>
                    <HashLink className='hover:text-primary transition-all' to="/#portfolio">Portfolio</HashLink>
                    <HashLink className='hover:text-primary transition-all' to="/#services">Services</HashLink>
                    <HashLink className='hover:text-primary transition-all' to="/#contact">Contact</HashLink>
                </div>
                <div>
                    <span className="footer-title">Hire Me</span>
                    <a className='hover:text-primary transition-all ' href="https://drive.google.com/file/d/1hS0FTN0t1FeXYNmlHQo8a4ozqqbLVuZI/view?usp=sharing" target="_blank" rel="noopener noreferrer">Get My Resume</a>
                    <HashLink className='hover:text-primary transition-all pb-4' to="/#contact">Leave a Message</HashLink>

                </div>
            </footer><hr/>
            <footer className=" px-10 py-4 bg-secondary text-white text-center">

                <p>Sohag Portfolio <br />All rights are reserved @ 2022</p>


            </footer>
        </div>
    );
};

export default Footer;