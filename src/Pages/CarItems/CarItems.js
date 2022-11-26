import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import Caritem from './Caritem';

const CarItems = () => {
    const items = useLoaderData();
    const [carInfo, setCarInfo] = useState(null)
    return (
        <div className='mt-10'>
            <h1 className='text-center text-5xl underline'><span className='text-primary'>{items[0].name.split(' ')[0]} Brands</span> </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {
                    items.map(item => <Caritem
                        key={item._id}
                        item={item}
                        setCarInfo={setCarInfo}
                    >
                    </Caritem>)
                }
            </div>
            {
                carInfo &&
                <BookingModal
                    carInfo={carInfo}
                    setCarInfo={setCarInfo}
                ></BookingModal>
            }
        </div>
    );
};

export default CarItems;