import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Inventory = (props) => {
    const { _id, name, description, image, price, quantity, supplier } = props.inventory;
    const params = useParams();
    const navigate = useNavigate();
    const handle = () => {
        navigate(`/singleItem/${_id}`)
    }
    return (
        <div>
            <div class="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={image} alt={image} /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <div class="card-actions justify-end">
                        <button onClick={handle} class="btn bg-violet-600">Update Stock</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;