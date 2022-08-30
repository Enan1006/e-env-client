import React from 'react';

const Feature = (props) => {
    const { img, name, description } = props.feature;

    return (
        <div className='grid grid-cols-2 mt-10'>
            <div> <img src={img} alt="" srcset="" /> </div>
            <div>
                <h1 className='text-lg font-semibold'>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Feature;