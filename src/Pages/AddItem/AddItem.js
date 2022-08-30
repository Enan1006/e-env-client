import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';


const AddItem = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {

        console.log(data)
        axios.post('http://localhost:5000/inventories',
            {
                name: data.model,
                description: data.description,
                price: data.price,
                quantity: data.quantity,
                supplier: data.supplier,
                image: data.image,
                user: user.email
            }
        )
        toast('Items added');
        navigate('/');

    };

    return (
        <div className="card w-1/2 mx-auto bg-base-100 shadow-xl p-20">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-5'>
                    <label class="form-label inline-block mb-2 text-gray-700">Car Model</label>
                    <input {...register("model", {
                        required: {
                            value: true,
                            message: "Model is required"
                        }
                    })} type="text" className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                    <span>{errors.model?.type === 'required' && <p className='text-red-500'>{errors.model?.message}</p>}</span>
                </div>
                <div className='mt-5'>
                    <label class="form-label inline-block mb-2 text-gray-700">Description</label>
                    <textarea {...register("description", {
                        required: {
                            value: true,
                            message: "Description is required"
                        }
                    })} cols="30" rows="10" className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                    <span>{errors.description?.type === 'required' && <p className='text-red-500'>{errors.description?.message}</p>}</span>
                </div>
                <div className='mt-5'>
                    <label class="form-label inline-block mb-2 text-gray-700">Price</label>
                    <input {...register("price", {
                        required: {
                            value: true,
                            message: "Price is required"
                        }
                    })} type="number" className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                    <span>{errors.price?.type === 'required' && <p className='text-red-500'>{errors.price?.message}</p>}</span>
                </div>
                <div className='mt-5'>
                    <label class="form-label inline-block mb-2 text-gray-700">Quantity</label>
                    <input {...register("quantity", {
                        required: {
                            value: true,
                            message: "Quantity is required"
                        }
                    })} type="number" className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                    <span>{errors.quantity?.type === 'required' && <p className='text-red-500'>{errors.quantity?.message}</p>}</span>
                </div>
                <div className='mt-5'>
                    <label class="form-label inline-block mb-2 text-gray-700">Supplier Name</label>
                    <input {...register("supplier", {
                        required: {
                            value: true,
                            message: "Supplier is required"
                        }
                    })} type="text" className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                    <span>{errors.supplier?.type === 'required' && <p className='text-red-500'>{errors.supplier?.message}</p>}</span>
                </div>
                <div className='mt-5'>
                    <label class="form-label inline-block mb-2 text-gray-700">Image</label>
                    <input {...register("image", {
                        required: {
                            value: true,
                            message: "Image is required"
                        }
                    })} type="text" className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                    <span>{errors.image?.type === 'required' && <p className='text-red-500'>{errors.image?.message}</p>}</span>
                </div>


                <div className='mt-5'>
                    <input type="submit" value="Submit" className="block w-full px-3 py-1.5 text-base font-normal  bg-violet-600 text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out hover:bg-white hover:text-violet-600 hover:border-violet-600 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;