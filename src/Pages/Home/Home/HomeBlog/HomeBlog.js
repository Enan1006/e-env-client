import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBlog = (props) => {
    const { title, image, description } = props.blog;
    return (
        <div>
            <img src={image} alt="" srcset="" />
            <h2>{title}</h2>
        </div>
    );
};

export default HomeBlog;