import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState({});
    useEffect(() => {
        fetch()
    }, [])
    return (
        <div>

        </div>
    );
};

export default SingleBlog;