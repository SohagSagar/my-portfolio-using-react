import React from 'react';
import './Navbar.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {

    const menu =
        <>

            <li><HashLink to="/#home">HOME</HashLink></li>
            <li><HashLink to="/#about">ABOUT</HashLink></li>
            <li><HashLink to="/#skills">SKILLS</HashLink></li>
            <li><HashLink to="/#work-flow">WORK FLOWS</HashLink></li>
            <li><HashLink to="/#portfolio">PORTFOLIO</HashLink></li>
            {/* <li><a>CONTACT</a></li>
            <li><a>REVIEWS</a></li> */}
        </>

    return (
        <div class="navbar bg-white lg:px-12 sticky top-0 z-10 scrolled">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Sohag Portfolio</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            <div class="navbar-end">
                <div className='flex item-center justify-around text-xl '>
                    <a href="https://www.linkedin.com/in/sohagsagar29/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='mr-4' /></a>
                    <a href="https://github.com/SohagSagar?tab=repositories" target="_blank" rel="noopener noreferrer"><AiFillGithub className='mr-4' /></a>
                    <a href="https://www.facebook.com/sagorsohag29" target="_blank" rel="noopener noreferrer"><RiFacebookFill /></a>

                </div>

            </div>
        </div>
    );
};

export default Navbar;