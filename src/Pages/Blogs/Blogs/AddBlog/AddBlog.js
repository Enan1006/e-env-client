import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBlog = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const content = {
            title: data.title,
            image: data.image,
            description: data.description
        }
        fetch('https://hidden-sands-59060.herokuapp.com/blogs', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(content),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', content);
            })
        toast("Blog added successfull");
        navigate('/');

    };
    return (
        <div>
            <div className="card w-1/2 mx-auto bg-base-100 shadow-xl p-20">
                <h2 className='text-violet-600 font-bold text-4xl text-center'>Add Blog</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='mt-5'>
                        <label class="form-label inline-block mb-2 text-gray-700">Title</label>
                        <input {...register("title", {
                            required: {
                                value: true,
                                message: "Title Address is required"
                            }
                        })} className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        <span>{errors.title?.type === 'required' && <p className='text-red-500'>{errors.title?.message}</p>}</span>
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
                        <label class="form-label inline-block mb-2 text-gray-700">Image</label>
                        <textarea {...register("image", {
                            required: {
                                value: true,
                                message: "Image is required"
                            }
                        })} className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        <span>{errors.image?.type === 'required' && <p className='text-red-500'>{errors.image?.message}</p>}</span>
                    </div>

                    <div className='mt-5'>
                        <input type="submit" value="Submit" className="block w-full px-3 py-1.5 text-base font-normal  bg-violet-600 text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out hover:bg-white hover:text-violet-600 hover:border-violet-600 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer" />

                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddBlog;