import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useBuyer from '../../hooks/useBuyer';

const Caritem = ({item,setCarInfo}) => {
    const {user} = useContext(AuthContext);
    const  [isBuyer] = useBuyer(user?.email)
    const {name,picture,location,resale_price,original_price,useYear,timePost,sellerName} = item;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='w-full h-56' src={picture} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Resel Price: {resale_price}$</p>
                <p>Original Price: {original_price}$</p>
                <p>Year of use: {useYear}</p>
                <p>Time of Post: {timePost}</p>
                <p>Seller Name: {sellerName}</p>
                <p>Location: {location}</p>
                <div className="card-actions justify-center">
                    <label disabled={!isBuyer} onClick={()=>setCarInfo(item)}
                        htmlFor="bookingModal" 
                        className="btn btn-primary">Book Now</label>
                </div>
                {
                    !isBuyer && <p className='text-red-600 text-center font-bold'>Only buyer can book this product</p>
                }
                
            </div>
        </div>
    );
};

export default Caritem;