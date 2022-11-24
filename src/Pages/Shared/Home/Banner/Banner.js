import React from 'react';
import img1 from '../../../../assets/image-1.png'
import img2 from '../../../../assets/image-3.png'
import img3 from '../../../../assets/image-2.png'
import BannerItem from './BannerItem';
const bannerInfo = [
    {
        image: img1,
        title: 'Best Rental Cars In Your Location',
        info: 'Rent a car',
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        title: 'Quality Cars with Unlimited Miles',
        info: 'Rent a car',
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        title: 'Best Services For You',
        info: 'Rent a car',
        prev: 2,
        id: 3,
        next: 1
    }
]
const Banner = () => {
    return (
        <div className="carousel w-full">
            {
                bannerInfo.map(slide => <BannerItem 
                    key = {slide.id}
                    slide = {slide}
                    >
                    </BannerItem>)
            }
        </div>
    );
};

export default Banner;