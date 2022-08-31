import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeBlog from '../Home/HomeBlog/HomeBlog';



const HomeBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/home-blogs')
            .then(Res => Res.json())
            .then(data => setBlogs(data))
    }, []);
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    lazyLoad: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    lazyLoad: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
        ]

    };

    return (
        <div className='mx-20 m-40'>
            <h2 className='text-4xl font-semibold text-violet-600 text-center mb-10'>Blogs</h2>
            <div className='mx-auto'>
                <Slider {...settings}>
                    {blogs.map((item) => (
                        <div key={item._id} class="card card-compact bg-base-100 shadow-xl ">
                            <figure><img src={item.image} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">{item.title}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">See Detail</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default HomeBlogs;