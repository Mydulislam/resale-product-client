import React from 'react';
import AdvertisedItems from '../../../AdvertisedItems/AdvertisedItems';
import CategoryItems from '../../../CategoryItems/CategoryItems';
import NewsLetter from '../../../NewsLetter/NewsLetter';
import Banner from '../Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <CategoryItems></CategoryItems>
            <Services></Services>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;