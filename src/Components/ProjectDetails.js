import React from 'react';
import { useParams } from 'react-router-dom';
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
import { useQuery } from 'react-query';
import Loading from './Loading';


const ProjectDetails = () => {
    const { id } = useParams();
    const { data: projectDetails, isLoading } = useQuery('project', () => fetch(`https://peaceful-brushlands-64754.herokuapp.com/project/${id}`).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    const { name, type, stacks, detailsImg, descriptions, clientLink, serverLink, liveLink, credentials } = projectDetails;

    return (
        <div className='bg-secondary flex flex-col justify-center justify-items-center lg:items-center lg:px-12 py-5 '>

            <div className="card  lg:w-[800px] bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-lg ">Featured Images</h2>
                    {
                        !detailsImg && <Loading></Loading>
                    }

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
                            detailsImg?.map((img, index) => <SwiperSlide key={index}><img src={img} alt="" /> </SwiperSlide>)
                        }


                    </Swiper>
                </div>
            </div>

            <div className="card lg:w-[800px] bg-base-100 shadow-xl mt-5">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-lg ">Project Details</h2><hr />

                    {/* //table content */}
                    <div className=" bg-white overflow-x-auto">
                        <table className="table table-auto table-compact border-spacing-0 w-full ">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{name}</td>
                                </tr>

                                <tr>
                                    <th>Credentials</th>
                                    {
                                        credentials?.length > 0 ? <td>{credentials[0]} <br /> {credentials[1]}</td> :
                                            <td>N/A</td>
                                    }
                                </tr>

                                <tr>
                                    <th>Type</th>
                                    <td>{type}</td>

                                </tr>

                                <tr>
                                    <th>Stacks</th>
                                    <td>{stacks}</td>

                                </tr>
                                    <tr>
                                        <th>Descriptions</th>
                                        <td><ul className='list-disc list-inside text-justify whitespace-pre-line'>
                                            {
                                                descriptions?.map((des, index) => <li key={index}>{des}</li>)
                                            }
                                        </ul></td>

                                    </tr>

                                    <tr>
                                        <th>Codes</th>
                                        <td >
                                            <a className='mr-5' href={liveLink} target="_blank" rel="noopener noreferrer"><BsBroadcastPin className='inline ' /> Go Live</a>

                                            <a className='mr-5' href={clientLink} target="_blank" rel="noopener noreferrer"><FaStreetView className='inline ' /> Client</a>
                                            {
                                                serverLink && <a href={serverLink} target="_blank" rel="noopener noreferrer"><BsServer className='inline ' /> Sever</a>
                                            }

                                        </td>
                                    </tr>

                            </tbody>

                        </table>
                        <hr />
                    </div>
                    {/* table ends */}


                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;