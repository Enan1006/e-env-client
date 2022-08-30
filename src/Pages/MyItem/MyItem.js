import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import Loader from '../Shared/Loader/Loader';


const MyItem = () => {
    const [user, loading] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getOrder = async () => {
            const email = user.email;
            const url = `http://localhost:5000/inventory?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data)
        }
        getOrder();
    }, [user])

    if (loading) {
        return <Loader />;
    }
    return (
        <div className='my-40 mx-20'>
            <div className='my-10'>
                {
                    items.length > 0
                        ?
                        <div className='my-10 mx-auto'>
                            {
                                items.map(item => <div class="card card-compact w-1/2 my-10 bg-base-100 shadow-xl">
                                    <figure><img src={item.image} alt="Shoes" /></figure>
                                    <div class="card-body">
                                        <h2 class="card-title">{item.name}</h2>
                                        <p><strong>Price:</strong> ${item.price}</p>
                                        <p><strong>Quantity:</strong> {item.quantity}</p>
                                        <p><strong>Supplier:</strong> {item.supplier}</p>
                                    </div>
                                </div>)
                            }
                        </div>
                        :
                        <h2 className='text-6xl font-bold text-violet-600'>You haven't uploaded any item yet</h2>
                }
            </div>

        </div>
    );
};

export default MyItem;