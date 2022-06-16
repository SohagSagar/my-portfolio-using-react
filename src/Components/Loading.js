import React from 'react';
import { ThreeDots   } from  'react-loader-spinner';
const Loading = () => {
    return (
        <div className='flex justify-center mt-[-60px]'>
           <ThreeDots color="#FFB742" height={80} width={80} />
        </div>
    );
};

export default Loading;