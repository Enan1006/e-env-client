import React from 'react';
import Banner from '../Banner/Banner';
import FeatureItem from '../FeatureItem/FeatureItem';
import Features from '../Features/Features';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Features />
            <FeatureItem />
        </div>
    );
};

export default Home;