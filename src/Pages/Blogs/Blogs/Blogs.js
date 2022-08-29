import React, { useEffect, useState } from 'react';
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