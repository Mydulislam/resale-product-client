import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const MyPayment = () => {
    const data = useLoaderData();
    const navigation = useNavigation()
    const { itemName, price } = data;
    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center font-bold text-4xl'>Payment</h1>
            <h2>Payment for {itemName}</h2>
            <p>Please pay <strong>{price}$</strong> for your {itemName} product</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                        data = {data}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default MyPayment;