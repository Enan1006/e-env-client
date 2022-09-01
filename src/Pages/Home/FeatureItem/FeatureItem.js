import React, { useEffect, useState } from 'react';
import SingleItem from '../SingleItem/SingleItem';

const FeatureItem = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://hidden-sands-59060.herokuapp.com/featurecars')
            .then(Response => Response.json())
            .then(data => setCars(data))
    }, []);

    return (
        <div className='my-28 mx-10'>
            <h2 className='text-4xl font-semibold text-violet-600 text-center mb-10'>Featured Cars</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    cars.map(car => <SingleItem
                        key={car._id}
                        car={car}
                    ></SingleItem>)
                }
            </div>
        </div>
    );
};

export default FeatureItem;