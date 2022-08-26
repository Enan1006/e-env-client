import React from 'react';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            "id": 1,
            "service": "Schedule a Test Drive",
            "description": "With any of our vehicles today!"
        },
        {
            "id": 2,
            "service": "Get Approved In Seconds",
            "description": "Get online pre-approval for financing"
        },
        {
            "id": 3,
            "service": "Schedule service",
            "description": "Schedule car maintenance or repair right here"
        }
    ]
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;