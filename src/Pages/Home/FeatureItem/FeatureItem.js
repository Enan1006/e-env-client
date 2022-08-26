import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';

const FeatureItem = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/featurecars')
            .then(Response => Response.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl font-semibold text-violet-600 text-center'>Featured Cars</h2>
            {
                cars.map(car => <h1>{car.name}</h1>)
            }
        </div>
    );
};

export default FeatureItem;