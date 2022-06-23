import React from 'react';
import { HiLightBulb } from 'react-icons/hi';
import { MdGpsFixed } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { MdWeb } from 'react-icons/md';
import { GiFinishLine } from 'react-icons/gi';

const WorkFlow = () => {
    return (
        <div id='work-flow' className='bg-secondary px-12 py-28 '>
            <div className='text-white'>
                <h1 className=' whitespace-nowrap  uppercase text-4xl font-semibold border-b-4 border-primary pb-2 w-60'> Work Flow</h1>
                <h2 className='font-bold text-[50px] leading-tight '>My Work Process</h2>
            </div>

            <div className='flex justify-center mt-24'>
                <ul className="steps steps-vertical lg:steps-horizontal gap-5 cursor-pointer ">

                    {/* understanding steps */}
                    <li className="step "><div>
                        <div className="card w-[200px] h-[200px] bg-base-100 shadow-xl hover:bg-[#DE4839] ">
                            <div className="p-5 my-auto transition  duration-700  hover:duration-700 hover:transition-all hover:text-white card-actions justify-start items-center  text-[#DE4839]">
                                <HiLightBulb className='text-4xl inline ' />
                                <p className='text-lg font-semibold'>Understand</p>
                                <p className='mt-2 break-all text-left font-semibold'>First step to understand the project documentation.</p>
                            </div>
                        </div>
                    </div></li>

                    {/* define steps */}
                    <li className="step"><div>
                        <div className="card w-[200px] h-[200px] bg-base-100 shadow-xl hover:bg-[#00AEFF]">
                            <div className="p-5 my-auto transition  duration-700  hover:duration-700 hover:transition-all hover:text-white card-actions justify-start items-center  text-[#00AEFF]">
                                <MdGpsFixed className='text-4xl inline ' />
                                <p className='text-lg font-semibold'>Define</p>
                                <p className='mt-2 break-all text-left font-semibold'>I brainstrom possible design solutions for the project.</p>
                            </div>

                        </div>
                    </div></li>

                    {/* skeleton steps */}
                    <li className="step"><div>
                        <div className="card w-[200px] h-[200px] bg-base-100 shadow-xl hover:bg-[#6A1B4D]">
                            <div className="p-5 my-auto transition  duration-700  hover:duration-700 hover:transition-all hover:text-white card-actions justify-start items-center  text-[#6A1B4D]">
                                <CgWebsite className='text-4xl inline ' />
                                <p className='text-lg font-semibold'>Skeleton</p>
                                <p className='mt-2 break-all text-left font-semibold'>I create a skeleton of the product which is about to design.</p>
                            </div>

                        </div>
                    </div></li>

                    {/* Prototype steps */}
                    <li className="step"><div>
                        <div className="card w-[200px] h-[200px] bg-base-100 shadow-xl hover:bg-[#8D3DAF]">
                            <div className="p-5 my-auto transition  duration-700  hover:duration-700 hover:transition-all hover:text-white card-actions justify-start items-center  text-[#8D3DAF]">
                                <MdWeb className='text-4xl inline ' />
                                <p className='text-lg font-semibold'>Prototype</p>
                                <p className='mt-2 break-all text-left font-semibold'>I make a design and prototype for the project</p>
                            </div>
                        </div>
                    </div></li>

                    {/* Implement steps */}
                    <li className="step"><div>
                        <div className="card w-[200px] h-[200px] bg-base-100 shadow-xl hover:bg-[#1FAA59]">

                            <div className="p-5 my-auto transition  duration-700  hover:duration-700 hover:transition-all hover:text-white card-actions justify-start items-center  text-[#1FAA59]">
                                <GiFinishLine className='text-4xl inline ' />
                                <p className='text-lg font-semibold'>Implement</p>
                                <p className='mt-2 break-all text-left font-semibold'>After implementation I deliver for implementation</p>
                            </div>
                        </div>
                    </div></li>

                </ul>
            </div>
        </div>
    );
};

export default WorkFlow;