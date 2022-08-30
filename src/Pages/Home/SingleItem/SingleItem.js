import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SingleItem = (props) => {
    const navigate = useNavigate();
    const { _id, name, image, price, quantity, supplier } = props.car;
    const handleBlog = () => {
        navigate(`/singleItem/${_id}`)
    }
    return (
        <div>
            <div class="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={image} alt={image} /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <div class="card-actions justify-end">
                        <button onClick={handleBlog} class="btn bg-violet-600">Update Stock</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;