import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationalModal from '../../Shared/ConfimationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {
    const [deleteBuyer, setDeleteBuyer] = useState(null)
    const closeModal = ()=>{
        setDeleteBuyer(null)
    }

    const {data:buyers=[], isLoading, refetch} = useQuery({
        queryKey:['buyers'],
        queryFn:()=> fetch('https://server-site-silk-ten.vercel.app/buyers')
                    .then(res=>res.json())
    });

    // delete buyer
    const handleDelete = (buyer)=>{
        fetch(`https://server-site-silk-ten.vercel.app/buyer/${buyer._id}`,{
            method:'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                refetch();
                toast.success('Successfully deleted')
            }
            refetch();
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center font-bold text-3xl mb-4'>All buyers</h1>
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
                            <td><label onClick={()=>setDeleteBuyer(buyer)} htmlFor="confirmation-modal" className='btn btn-sm btn-error'>Delete</label></td>
                        </tr>)
                    }
                </tbody>
            </table>
            {
                deleteBuyer && <ConfirmationalModal
                title = {`are you sure want to delete?`}
                handleDelete = {handleDelete}
                deleteButton = 'Delete'
                deleteData = {deleteBuyer}
                closeModal={closeModal}
                >
                </ConfirmationalModal>
            }
        </div>
    );
};

export default AllBuyers;