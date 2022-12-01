import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AdvertisedItem = ({advertise}) => {
    const {user} = useContext(AuthContext);
    console.log(user);
    const {name, price, postDate, condition, description, image, location, purchaseYear} = advertise;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='w-full h-56 p-5' src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}$</p>
                <p>Purchases Year: {purchaseYear}</p>
                <p>Time of Post: {postDate}</p>
                <p>Seller Name: {user?.displayName}</p>
                <p>Location: {location}</p>
                <p>{description}</p>
                <p>Car Condition : {condition}</p>
            </div>
        </div>
    );
};

export default AdvertisedItem;