import React from 'react';

const Blog = ({ blog }) => {
    const { title, image, description } = blog;
    return (
        <div className='my-10'>
            <div class="card card-side bg-base-100 shadow-xl p-10">
                <figure><img className='w-60' src={image} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                    <p>{description.slice(0, 400)}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;