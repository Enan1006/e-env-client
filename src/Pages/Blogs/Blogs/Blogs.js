import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(Res => Res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='mx-20 my-40'>
            <div className='flex justify-center'>
                <Link className=' px-10 py-4 text-base font-normal  bg-violet-600 text-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer' to='/add-blog'>Add Blog</Link>
            </div>
            <div>
                {
                    blogs.map(blog => <Blog
                        key={blog._id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;