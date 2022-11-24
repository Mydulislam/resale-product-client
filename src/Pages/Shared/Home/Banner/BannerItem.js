import React from 'react';

const BannerItem = ({ slide }) => {
    const { id, info, title, prev, next, image } = slide;
    return (
        <div style={{
            height: '80vh',
            backgroundImage: `url(${image})`,
            backgroundColor: 'rgba(0,0,0,0.5)',
            backgroundBlendMode: 'multiply',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'

        }} id={`slide${id}`} className="carousel-item relative w-full h-96 rounded">
            {/* <div className="carousel-img w-full h-2/5">
                <img src={image} className='h-96 w-full' alt='' />
            </div> */}
            <div className="absolute justify-center items-center w-full lg:top-1/2">
                <div className='w-2/4 mx-auto text-center'>
                    <h1 className="text-primary font-bold text-2xl capitalize">{info}</h1>
                    <p className='text-6xl font-bold mb-3 text-white'>{title}</p>
                </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;