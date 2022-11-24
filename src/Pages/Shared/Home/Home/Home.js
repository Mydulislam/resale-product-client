import React from 'react';
import AdvertisedItems from '../../../AdvertisedItems/AdvertisedItems';
import CategoryItems from '../../../CategoryItems/CategoryItems';
import NewsLetter from '../../../NewsLetter/NewsLetter';
import Services from '../../../Services/Services';
import Banner from '../Banner/Banner';

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