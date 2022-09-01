import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SingleItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [carDetails, setCarDetails] = useState({});
    const [res, setRes] = useState({});
    const [stock, setStock] = useState(false);
    useEffect(() => {
        const url = `https://hidden-sands-59060.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(Res => Res.json())
            .then(data => {
                setCarDetails(data);
            })
    }, [id, res])

    const { name, image, description, price, quantity, supplier } = carDetails;


    const handleDelivered = () => {
        if (quantity > 0) {
            const newQuantity = {
                quantity: (quantity - 1)
            };
            const url = `https://hidden-sands-59060.herokuapp.com/inventory/${id}`;
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

    const handleStock = e => {
        e.preventDefault();
        const amount = e.target.amount.value;
        const newQuantity = {
            quantity: parseInt(quantity) + parseInt(amount),
        };
        const url = `https://hidden-sands-59060.herokuapp.com/inventory/${id}`;
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
        console.log(quantity);

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
                        <button onClick={() => setStock(!stock)} class="text-violet-600 text-lg bg-violet-200 py-2 px-6 rounded">Restock</button>
                        {
                            handleStock && <>
                                <form onSubmit={handleStock}>
                                    <div>
                                        <input className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' type="number" name="amount" id="" placeholder='Enter number' />
                                    </div>
                                    <div className='mt-5'>
                                        <input type="submit" value="Submit" className="block w-full px-3 py-1.5 text-base font-normal  bg-violet-600 text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out hover:bg-white hover:text-violet-600 hover:border-violet-600 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer" />
                                    </div>
                                </form>
                            </>
                        }
                        <button onClick={handleDelivered} class="text-violet-600 text-lg bg-violet-200 py-2 px-6 rounded">Delivered</button>
                        <button onClick={handleManage} class="text-violet-600 text-lg bg-violet-200 py-2 px-6 rounded">Manage</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;