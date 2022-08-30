import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { _id, title, image, description } = blog;
    const navigate = useNavigate();
    const handleBlog = () => {
        navigate(`/blog/${_id}`)
    }


    return (
        <div className='my-10'>
            <div class="card card-side bg-base-100 shadow-xl p-10">
                <figure><img className='w-60' src={image} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                    <p>{description.slice(0, 400)}</p>
                    <div class="card-actions flex justify-end">
                        <button onClick={handleBlog} class="px-10 py-4 text-base font-normal  bg-violet-600 text-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer">Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;