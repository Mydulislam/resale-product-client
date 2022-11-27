import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ carInfo, setCarInfo }) => {
    const { user } = useContext(AuthContext);
    const { name, resale_price } = carInfo;
    const handleBook = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.name.value;
        const userEmail = form.email.value;
        const itemName = form.itemName.value;
        const price = form.price.value;
        const phoneNumber = form.phoneNumber.value;
        const location = form.location.value;

        const booking = {
            username,
            userEmail,
            itemName,
            price,
            phoneNumber,
            location
        };
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    setCarInfo(null);
                    toast.success('Item is booked');
                }
                else{
                    toast.error(data.message)
                }

            })
    }
    return (
        <>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className='mb-3 text-center font-bold text-2xl'>Name: {name}</p>
                    <form onSubmit={handleBook} className='grid grid-cols-1 gap-3'>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='itemName' value={name} disabled type="text" placeholder="Item name" className="input input-bordered w-full" />
                        <input name='price' value={resale_price} disabled type="text" placeholder="Price" className="input input-bordered w-full" />
                        <input name='phoneNumber' type="number" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <input name='location' type="text" placeholder="Metting Location" className="input input-bordered w-full" required /><br />
                        <input className='btn input-bordered btn-primary w-full' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;