import React from 'react';
import Feature from '../Feature/Feature';

const Features = () => {
    const features = [
        {
            "id": 1,
            "img": "https://i.ibb.co/bRxCp6g/module-1.png",
            "name": "Build Your Deal With Confidence",
            "description": "Get a personalized offer from a dealer online, including manufacturer incentives and discounts. Next, build a custom deal that includes the value of your trade-in and monthly payments."
        },
        {
            "id": 2,
            "img": "https://i.ibb.co/dgxDzqt/module-2.png",
            "name": "Choose From More than 800,000 Used Cars",
            "description": "Get access to our extensive selection of pre-owned vehicles for sale across the US, and see price ratings based on similar used car listings in your area, so you know when you are getting a great deal."
        },
        {
            "id": 3,
            "img": "https://i.ibb.co/23kYPKy/module-3.png",
            "name": "Get a Trade-in Offer You Can Use Today",
            "description": "Answer a few questions to see your car’s market value and get a cash offer in minutes. Cash out, or trade in for a new or used car."
        },
    ]
    return (
        <div className='m-20'>
            <h2 className='text-violet-600 font-semibold text-4xl'>Control Your Car-Buying Experience</h2>
            <p className='mt-5'>At E-ENV, you're in charge of the process from start to finish. Here's how.</p>
            <div className='grid grid-cols-1'>
                {
                    features.map(feature => <Feature
                        feature={feature}
                    ></Feature>)
                }
            </div>
        </div>
    );
};

export default Features;