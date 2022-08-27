import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventories')
            .then(Response => Response.json())
            .then(data => setInventories(data))
    }, [])
    return (
        <div className='my-28 mx-10'>
            <h2 className='text-4xl font-semibold text-violet-600 text-center mb-10'>Featured Cars</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;