import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {
    const {data:users=[], isLoading} = useQuery({
        queryKey:['users'],
        queryFn:()=> fetch('http://localhost:5000/users')
                    .then(res=>res.json())
    });
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>All users</h1>
            <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index)=><tr key={user._id}>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default AllUsers;