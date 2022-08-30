import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SingleBlog = () => {
    const { blogId } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/blog/${blogId}`
        fetch(url)
            .then(Res => Res.json())
            .then(data => setBlog(data))
    }, [blogId]);
    const handleBlog = () => {
        navigate(`/add-blog`)
    }
    return (
        <div className='m-20'>
            <button onClick={handleBlog} className='mx-auto py-2 px-6 rounded bg-violet-200 text-violet-600'>Add Post</button>
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