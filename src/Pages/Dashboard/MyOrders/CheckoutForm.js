
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ data }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transonId, setTransonId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { price, username, userEmail, _id } = data;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('')
        }
        setSuccess('');
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: username,
                        email: userEmail
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return
        }
        if (paymentIntent.status === "succeeded") {

            const payment = {
                price,
                transonId:paymentIntent.id,
                userEmail,
                bookingId: _id
            }
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess("Congrates! Your payment Done");
                        setTransonId(paymentIntent.id);
                    }
                })
            setProcessing(false)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-primary my-6' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
                <p className='text-red-600 font-bold'>{cardError}</p>

                {
                    success && <>
                        <p className='text-green-500'>{success}</p>
                        <p>Your Transec: Id <span className='font-bold'>{transonId}</span></p>
                    </>
                }
            </form>
        </>
    );
};

export default CheckoutForm;