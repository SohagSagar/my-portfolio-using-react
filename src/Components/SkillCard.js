import React from 'react';

const SkillCard = ({skill}) => {
    return (

        <div className="card w-28 lg:w-32 bg-base-100 shadow-2xl zoom-effect">
            <div className="card-body">
                <div className="card-actions justify-center hover:ease-in   ">
                    <img className='w-[40px] lg:w-[80px] h-[40px] lg:h-[60px]' src={skill?.name} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SkillCard;