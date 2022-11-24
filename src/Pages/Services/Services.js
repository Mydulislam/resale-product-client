import React from 'react';
import { FaCarAlt } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";
import { FaCarBattery } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import './Services.css'
const servicesInfo = [
    {
        id: 1,
        icon: <FaCarAlt className='bg-primary w-16 h-16 rounded-full p-4 inline'/>,
        title: 'Car Selling',
        info: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corporis, Nisi.'
    },
    {
        id: 2,
        icon: <FaTools className='bg-primary w-16 h-16 rounded-full p-4 inline'/>,
        title: 'Parts Repair',
        info: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corporis, Nisi.'
    },
    {
        id: 3,
        icon: <FaCarCrash className='bg-primary w-16 h-16 rounded-full p-4 inline'/>,
        title: 'Car Insurance',
        info: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corporis, Nisi.'
    },
    {
        id: 4,
        icon: <FaCarBattery className='bg-primary w-16 h-16 rounded-full p-4 inline'/>,
        title: 'Battery Replacement',
        info: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corporis, Nisi.'
    },
    {
        id: 5,
        icon: <FaGasPump className='bg-primary w-16 h-16 rounded-full p-4 inline'/>,
        title: 'Oil Change',
        info: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corporis, Nisi.'
    },
    {
        id: 6,
        icon: <FaHeadset className='bg-primary w-16 h-16 rounded-full p-4 inline'/>,
        title: '24/7 Support',
        info: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corporis, Nisi.'
    },
]
const Services = () => {
    return (
        <div className='my-12'>
            <h1 className='text-center text-4xl font-bold my-7'>Our <span className='befor-css'>Services</span></h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    servicesInfo.map(services => <div key={services.id} className="card shadow-2xl">
                        <div className="card-body">
                            <div className="text-center mx-auto">
                                <i>{services.icon}</i>
                                <p className='text-center font-medium text-2xl my-3'>{services.title}</p>
                            </div>
                            <p className='text-center'>{services.info}</p>
                        </div>
                    </div>)
                }
            </div>
        </div> 
    )   
};

export default Services;