import React from 'react';
import aboutImg from '../../Images/about/about-us.png';

const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 m-20'>
            <div>
                <img className='my-auto' src={aboutImg} alt="" srcset="" />
            </div>
            <div>
                <h2 className='text-4xl font-bold text-violet-600 mb-10'>About Our Company</h2>
                <p>E-ENV is a leading automotive digital marketplace that seeks to make car buying and selling easy, transparent and efficient.

                    From discovery to delivery, consumers can use E-ENV to explore new and used vehicles from an expansive, cross-brand selection of inventory from our vast network of Certified Dealers.

                    Founded in 2005, E-ENV has built a trusted brand and a strong reputation for providing consumers with useful tools, research, market context and pricing transparency as they embark on their car-buying journey. The Company is bringing more of the purchasing process online by allowing consumers to find a new or used vehicle that is right for them, secure financing, sell or trade-in their current vehicle and complete their purchase with a reputable dealer all from the comfort of their home.

                    E-ENV powers auto-buying programs for more than 250 leading brands, including Sam's Club, Navy Federal Credit Union and American Express. We partner with our Certified Dealers to help millions of consumers find the right new or used vehicle that meets their needs, delivering a great consumer experience that is personalized and efficient.</p>
            </div>
        </div>
    );
};

export default About;