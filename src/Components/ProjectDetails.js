import React from 'react';
import { useParams } from 'react-router-dom';
import { useRef, useState } from "react";
import './ProjectDetails.css';
import { BsServer } from 'react-icons/bs';
import { FaStreetView } from 'react-icons/fa';
import { BsBroadcastPin } from 'react-icons/bs';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Styles.css";

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import slider1 from '../resourses/slider/admin dashboard.png'
import slider2 from '../resourses/slider/admin_add item.png'
import slider3 from '../resourses/slider/login pannel.png'
import slider4 from '../resourses/slider/user pannel.png'
import { useQuery } from 'react-query';
import Loading from './Loading';


const ProjectDetails = () => {
    const { id } = useParams();
    const { data: projectDetails, isLoading } = useQuery('project', () => fetch(`http://localhost:5000/project-info/${id}`).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    const { name, type, stacks, detailsImg, descriptions, clientLink, serverLink, liveLink } = projectDetails;
    console.log(projectDetails);


    return (
        <div className='bg-secondary flex flex-col justify-center justify-items-center lg:items-center lg:px-12 pt-5 '>

            <div class="card  lg:w-[800px] bg-base-100 shadow-xl ">
                <div class="card-body">
                    <h2 class="text-center font-semibold text-lg ">Featured Images</h2>

                    <Swiper className="mySwiper "
                        cssMode={true}
                        navigation={{
                            clickable: true,
                        }}
                        mousewheel={true}
                        keyboard={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}

                        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}

                    >
                        {
                            detailsImg.map(img=><SwiperSlide key={img._id}><img src={img} alt="" /> </SwiperSlide>)
                        }
                        

                    </Swiper>
                </div>
            </div>

            <div class="card lg:w-[800px] bg-base-100 shadow-xl mt-5">
                <div class="card-body">
                    <h2 class="text-center font-semibold text-lg ">Project Details</h2><hr />

                    {/* //table content */}
                    <div class=" bg-white">
                        <table class="table table-auto table-compact border-spacing-0 w-full ">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{name}</td>
                                </tr><hr />

                                <tr>
                                    <th>Type</th>
                                    <td>{type}</td>
                                </tr><hr />

                                <tr>
                                    <th>Stacks</th>
                                    <td>{stacks}</td>
                                </tr><hr />

                                <tr>
                                    <th>Descriptions</th>
                                    <td><ul className='list-disc list-inside text-justify whitespace-pre-line'>
                                        {
                                            descriptions.map(des => <li key={des._key}>{des}</li>)
                                        }
                                    </ul></td>
                                </tr><hr />

                                <tr>
                                    <th>Codes</th>
                                    <td >
                                        <a className='mr-5' href={liveLink} target="_blank" rel="noopener noreferrer"><BsBroadcastPin className='inline ' /> Go Live</a>

                                        <a className='mr-5' href={clientLink} target="_blank" rel="noopener noreferrer"><FaStreetView className='inline ' /> Client</a>

                                        <a href={serverLink} target="_blank" rel="noopener noreferrer"><BsServer className='inline ' /> Sever</a>
                                    </td>
                                </tr><hr />

                            </tbody>

                        </table>
                    </div>
                    {/* table ends */}


                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;