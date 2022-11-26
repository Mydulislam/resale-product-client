import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ carInfo, setCarInfo }) => {
    const {user} = useContext(AuthContext);
    console.log(user)
    const { name } = carInfo;
    const handleBook = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const price = form.price.value;
        const phoneNumber = form.phoneNumber.value;
        const location = form.location.value;

        const booking = {
            name,
            email,
            itemName,
            price, 
            phoneNumber,
            location
        }
        console.log(booking);
        // close modal
        setCarInfo(null)
    }
    return (
        <>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBook} className='grid grid-cols-1 gap-3'>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='itemName' type="text" placeholder="Item name" className="input input-bordered w-full" />
                        <input name='price' type="text" placeholder="Price" className="input input-bordered w-full" />
                        <input name='phoneNumber' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='location' type="text" placeholder="Metting Location" className="input input-bordered w-full" /><br/>
                        <input className='btn input-bordered btn-primary w-full' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;