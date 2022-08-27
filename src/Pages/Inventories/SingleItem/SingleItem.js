import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleItem = () => {
    const { id } = useParams();
    const [carDetails, setCarDetails] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(Res => Res.json())
            .then(data => {
                setCarDetails(data);
            })
    }, [])

    const handleStock = () => {
        console.log(carDetails.quantity);
    }
    const handleDelivered = () => {
        if (carDetails.quantity > 1) {
            let newQuantity = (carDetails.quantity - 1);
            console.log(newQuantity)
        }

    }

    return (
        <div>
            <div class="card card-compact p-40 bg-base-100 shadow-xl">
                <figure><img src={carDetails.image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="text-violet-600 text-center font-bold text-3xl mb-10">{carDetails.name}</h2>
                    <p className='mb-5'>{carDetails.description}</p>
                    <p><strong>Price:</strong> ${carDetails.price}</p>
                    <p><strong>Quantity:</strong> {carDetails.quantity}</p>
                    <p><strong>Supplier:</strong> {carDetails.supplier}</p>
                    <div class="card-actions flex justify-center mt-5">
                        <button onClick={handleStock} class="text-violet-600 text-lg bg-violet-200 py-2 px-6 rounded">Restock</button>
                        <button onClick={handleDelivered} class="text-violet-600 text-lg bg-violet-200 py-2 px-6 rounded">Delivered</button>
                        <button class="text-violet-600 text-lg bg-violet-200 py-2 px-6 rounded">Manage</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;