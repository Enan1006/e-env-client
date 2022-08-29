import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SingleItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [carDetails, setCarDetails] = useState({});
    const [res, setRes] = useState({});
    const [stock, setStock] = useState(false);
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(Res => Res.json())
            .then(data => {
                setCarDetails(data);
            })
    }, [id, res])

    const { name, image, description, price, quantity, supplier } = carDetails;

    const handleStock = () => {
        console.log(quantity);
    }
    const handleDelivered = () => {
        if (quantity > 0) {
            const newQuantity = {
                quantity: (quantity - 1)
            };
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newQuantity),
            })
                .then((response) => response.json())
                .then(data => {
                    console.log('Success:', data);
                    setRes(data);
                })
        }

    }

    const handleManage = () => {
        navigate('/manage-item');
    }

    return (
        <div>
            <div class="card card-compact p-40 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="text-violet-600 text-center font-bold text-3xl mb-10">{name}</h2>
                    <p className='mb-5'>{description}</p>
                    <p><strong>Price:</strong> ${price}</p>
                    <p><strong>Quantity:</strong> {quantity}</p>
                    <p><strong>Supplier:</strong> {supplier}</p>
                    <div class="card-actions flex justify-center mt-5">
                        <button onClick={handleStock} class="text-violet-600 text-lg bg-violet-200 py-2 px-6 rounded">Restock</button>
                        <button onClick={handleDelivered} class="text-violet-600 text-lg bg-violet-200 py-2 px-6 rounded">Delivered</button>
                        <button onClick={handleManage} class="text-violet-600 text-lg bg-violet-200 py-2 px-6 rounded">Manage</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;