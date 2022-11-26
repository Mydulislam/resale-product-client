import React from 'react';

const Caritem = ({item,setCarInfo}) => {
    const {name,picture,location,resale_price,original_price,useYear,timePost,sellerName} = item;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='w-full h-56' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Resel Price: {resale_price}$</p>
                <p>Original Price: {original_price}$</p>
                <p>Year of use: {useYear}</p>
                <p>Time of Post: {timePost}</p>
                <p>Seller Name: {sellerName}</p>
                <p>Location: {location}</p>
                <div className="card-actions justify-center">
                    <label onClick={()=>setCarInfo(item)}
                    htmlFor="bookingModal" 
                    className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Caritem;