import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {
    const { data: sellers = [], isLoading } = useQuery({
        queryKey: ['sellers'],
        queryFn: () => fetch('http://localhost:5000/sellers')
            .then(res => res.json())
    });
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>All sellers</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Verify</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((seller, index) => <tr key={seller._id}>
                            <th>{index + 1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td><button className='btn btn-sm btn-primary'>verify</button></td>
                            <td><button className='btn btn-sm btn-error'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;