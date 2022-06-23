import React from 'react';
import { GiAchievement } from 'react-icons/gi';
import { AiOutlineFileDone } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi';


const Summary = () => {
    return (
        <div className=' '>
            <section className='mt-[-110px] lg:px-12 py-10 text-white grid lg:grid-cols-3 sm:grid-cols-1 gap-5 justify-items-center items-center'>
                <div className="card w-96  shadow-xl bg-[#292B2E] p-4">
                    <div className=" flex justify-around items-center">
                        <div className='text-5xl rounded-full p-3 bg-primary text-secondary'><GiAchievement /></div>
                        <div>
                            <p className='text-primary font-semibold text-2xl text-center'>01+</p>
                            <p className='text-white text-xl'>Years of Experiences</p>
                        </div>

                    </div>
                </div>

                <div className="card w-96  shadow-xl bg-[#292B2E] p-4">
                    <div className=" flex justify-around items-center">
                        <div className='text-5xl rounded-full p-3 bg-primary text-secondary'><AiOutlineFileDone /></div>
                        <div>
                            <p className='text-primary font-semibold text-2xl text-center'>10+</p>
                            <p className='text-white text-xl'>Completed Projects</p>
                        </div>

                    </div>
                </div>

                <div className="card w-96  shadow-xl bg-[#292B2E] p-4">
                    <div className=" flex justify-around items-center">
                        <div className='text-5xl rounded-full p-3 bg-primary text-secondary'><HiUserGroup /></div>
                        <div>
                            <p className='text-primary font-semibold text-2xl text-center'>00+</p>
                            <p className='text-white text-xl'>Happy Clients</p>
                        </div>

                    </div>
                </div>



            </section>
        </div>
    );
};

export default Summary;