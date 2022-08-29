import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ManageItem = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventories')
            .then(Response => Response.json())
            .then(data => setInventories(data))
    }, []);

    const handleDelete = (id) => {
        const url = `http://localhost:5000/inventory/${id}`;
        const confirmation = window.confirm("Are you sure you want to delete?");
        if (confirmation) {
            axios.delete(url)
                .then(Response => {
                    console.log(Response);
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining)
                })
        }
        else {
            return;
        }
    }

    return (
        <div className='my-40 mx-20'>
            {
                inventories.map(inventory => <div class="flex my-5">
                    <div class="basis-1/4">
                        <img src={inventory.image} alt="" srcset="" />
                    </div>
                    <div class="basis-2/4 items-center">
                        <div>
                            <h2 className='text-center mb-3'><b>{inventory.name}</b></h2>
                            <p className='text-center'> <strong>Price:</strong> ${inventory.price}</p>
                            <p className='text-center'> <strong>Quantity:</strong> {inventory.quantity}</p>
                            <p className='text-center'> <strong>Supplier:</strong> {inventory.supplier}</p>
                        </div>
                    </div>
                    <div class="basis-1/4 flex items-center">
                        <button onClick={() => handleDelete(inventory._id)} className='py-2 px-6 bg-red-200 text-red-600 rounded'><i class="fa-solid fa-trash-can mr-2"></i>Delete</button>
                    </div>
                </div>)
            }
        </div >
    );
};

export default ManageItem;