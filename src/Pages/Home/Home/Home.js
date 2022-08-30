import React from 'react';
import Banner from '../Banner/Banner';
import FeatureItem from '../FeatureItem/FeatureItem';
import Features from '../Features/Features';
import HomeBlogs from '../HomeBlogs/HomeBlogs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Features />
            <FeatureItem />
            <HomeBlogs />
        </div>
    );
};

export default Home;