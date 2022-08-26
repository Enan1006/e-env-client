import React from 'react';
import banner1 from '../../../Images/banner/pexels-mike-b-120049.jpg';
import '../../../App.css';
import './Banner.css'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner1})`, backgroundSize: "cover", opacity: '0.6', backgroundColor: "black" }} className='grid justify-center '>
            <div className=' py-40'>
                <h1 className='text-6xl font-bold text-white text-center'>Best Place To Shop <br />
                    For Your Next Vehicle!</h1>
                <h3 className='text-lg text-white mt-5 text-center'>FIND CAR. ADD TO CART. FREE DELIVERY.</h3>
            </div>
        </div>
    );
};

export default Banner;