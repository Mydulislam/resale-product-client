import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationalModal from '../../Shared/ConfimationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {
    const [deleteSeller, setDeleteSeller] = useState(null)
    const closeModal = ()=>{
        setDeleteSeller(null)
    }

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: () => fetch('http://localhost:5000/sellers')
            .then(res => res.json())
    });

    // delete seller
    const handleDelete = (seller)=>{
        fetch(`http://localhost:5000/seller/${seller._id}`,{
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

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className="text-center font-bold text-3xl mb-4">All sellers</h1>
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
                            <td><label onClick={()=>setDeleteSeller(seller)} htmlFor="confirmation-modal" className='btn btn-sm btn-error'>Delete</label></td>
                        </tr>)
                    }
                </tbody>
            </table>
            {
                deleteSeller && <ConfirmationalModal
                title = {`are you sure want to delete?`}
                handleDelete = {handleDelete}
                deleteButton = 'Delete'
                deleteData = {deleteSeller}
                closeModal={closeModal}
                >
                </ConfirmationalModal>
            }
        </div>
    );
};

export default AllSellers;