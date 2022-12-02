import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import "./AdvertesedItems.css"
import AdvertisedItem from './AdvertisedItem';
const AdvertisedItems = () => {
    const [advertises, setAdvertises] = useState([]);
    const {loading} = useContext(AuthContext)
    useEffect(() => {
        axios.get('https://server-site-silk-ten.vercel.app/addadvertise')
            .then(response => {
                console.log(response);
                const result = response.data;
                console.log(result);
                setAdvertises(result);
            })
            .catch(err => console.log(err))
    }, [])

    if(loading){
        return <Loading></Loading>
    }
    
    return (
        <div>
            {
                advertises.length > 0 && 
                <>
                <h1 className='text-center text-4xl font-bold my-7'><span className='befor-css'>Advertised</span> Items</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        advertises.map(advertise => <AdvertisedItem
                            key={advertise._id}
                            advertise = {advertise}
                        ></AdvertisedItem>)
                    }
                </div>
                </>
            }

        </div>
    );
};

export default AdvertisedItems;