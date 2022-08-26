import React from 'react';

const Service = (props) => {
    const { service, description } = props.service;
    return (
        <div className='mb-20'>
            <div className='bg-violet-600 text-white py-10'>
                <h2 className='text-2xl font-semibold ml-10'>{service}</h2>
                <p className=' ml-10'>{description}</p>
            </div>
        </div>
    );
};

export default Service;