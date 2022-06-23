import React from 'react';

const ServiceCard = ({service}) => {
    const {img,name,descriptions} = service;
    return (
        <div className=" card w-96  h-56 bg-base-300 service-card hover:bg-primary  transition  duration-700  hover:duration-700 hover:transition-all">
            <div className="card-body hover:ring">

                <img className='card-title mx-auto w-18 hover:pb-12  hover:text-white  ' src={img} alt="" />
                <h1 className='text-center text-xl font-semibold'>{name}</h1>
                <p className='text-[16px] break-all'>{descriptions} </p>

            </div>
        </div>
    );
};

export default ServiceCard;