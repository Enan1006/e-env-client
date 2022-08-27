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
        <div>
            <h1>{items.length}</h1>
            {
                items.map(item => <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{item.model}</h2>
                        <p>{item.description}</p>

                    </div>
                </div>)
            }
        </div>
    );
};

export default MyItem;