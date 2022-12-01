import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {
    const {data:buyers=[], isLoading} = useQuery({
        queryKey:['buyers'],
        queryFn:()=> fetch('http://localhost:5000/buyers')
                    .then(res=>res.json())
    });
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>All buyers</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.map((buyer, index) => <tr key={buyer._id}>
                            <th>{index + 1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td><button className='btn btn-sm btn-error'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;