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
        info: 'You can sell your used car privately, online, or to a dealership. Before selling your vehicle using any option, you will need to gather all necessary documents.'
    },
    {
        id: 2,
        icon: <FaTools className='bg-primary w-16 h-16 rounded-full p-4 inline'/>,
        title: 'Parts Repair',
        info: 'Car Repair Estimates and Auto Repair Costs. The car repair cost for auto parts can sometimes exceed the value of the car.'
    },
    {
        id: 3,
        icon: <FaCarCrash className='bg-primary w-16 h-16 rounded-full p-4 inline'/>,
        title: 'Car Insurance',
        info: 'We evaluated large auto insurance companies based on average rates for a variety of drivers, coverage features available, levels of complaints,'
    },
    {
        id: 4,
        icon: <FaCarBattery className='bg-primary w-16 h-16 rounded-full p-4 inline'/>,
        title: 'Battery Replacement',
        info: 'Stay safe and let us come to you. Our Assist service will replace your car battery wherever you are. Just book a date and time slot online.'
    },
    {
        id: 5,
        icon: <FaGasPump className='bg-primary w-16 h-16 rounded-full p-4 inline'/>,
        title: 'Oil Change',
        info: 'Every car is different, but most should have their oil changed every 3,000 miles or three months. New vehicles usually require a change of oil every 6,000 miles'
    },
    {
        id: 6,
        icon: <FaHeadset className='bg-primary w-16 h-16 rounded-full p-4 inline'/>,
        title: '24/7 Support',
        info: '1800-258-5656 (8 AM to 10 PM) · logo. call. Buy; Sell. Lets talk about everything! Helpline Numbers. Email. Hey! How can I help you today? Open chat.'
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