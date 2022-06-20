import React, { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';
import ServiceCard from './ServiceCard';
import './Services.css'

const Services = () => {
    const {data:services,isLoading} = useQuery('services', ()=>fetch('http://localhost:5000/services').then(res=>res.json()))

    if(isLoading){
        return <Loading/>
    }
    
    return (
        <div className='bg-secondary text-white lg:px-12 py-12'>
            <div className=''>
                <h1 className=' whitespace-nowrap  uppercase text-4xl font-semibold border-b-4 border-primary pb-2 w-60'> Service</h1>
                <h2 className='font-bold text-[50px] leading-tight '>What I Offer For You</h2>
            </div>

            <div className='py-12 text-secondary grid lg:grid-cols-3 sm:grid-cols-1 gap-y-8 justify-items-center items-center '>

                {
                    services?.map(service=><ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services; <h1>this is service sections</h1>