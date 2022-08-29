import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/blog/${blogId}`
        fetch(url)
            .then(Res => Res.json())
            .then(data => setBlog(data))
    }, [blogId])
    return (
        <div className='m-20'>
            <div class="card w-1/2 mx-auto bg-base-100 shadow-xl">
                <figure><img src={blog.image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {blog.title}
                    </h2>
                    <p>{blog.description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;