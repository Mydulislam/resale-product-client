import React from 'react';
import image from '../../assets/letter-bg.png'
const NewsLetter = () => {
    return (
            <div style={{
                backgroundImage:`url(${image})`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                padding:'6rem 2rem',
                backgroundPosition:'center'
            }} className='text-center'>
                <h1 className='font-medium text-2xl'>Subscribe For Latest Updates</h1>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatum, Suscipit.</p>
                <form className='flex border-2 border-primary my-5 h-12 overflow-hidden max-w-2xl m-auto bg-white rounded-3xl'>
                    <input className='w-full outline-none h-full py-0 px-3' type="email" placeholder='please enter your email' />
                    <input className='bg-primary w-64 text-white' type="submit" value='Subscribe' />
                </form>
            </div>
    );
};

export default NewsLetter;