import React from 'react';

const MyBuyers = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-3xl mb-4">My Buyer</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        sellers.map((seller, index) => <tr key={seller._id}>
                            <th>{index + 1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td><button className='btn btn-sm btn-primary'>verify</button></td>
                            <td><label onClick={() => setDeleteSeller(seller)} htmlFor="confirmation-modal" className='btn btn-sm btn-error'>Delete</label></td>
                        </tr>)
                    } */}
                </tbody>
            </table>
        </div>
    );
};

export default MyBuyers;