import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationalModal from '../../../Shared/ConfimationModal/ConfirmationModal';
import Loading from '../../../Shared/Loading/Loading';

const MyProduct = () => {
    const [deletProduct, setDeleteProduct] = useState(null);

    const closeModal = ()=>{
        setDeleteProduct(null)
    }

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('http://localhost:5000/addproducts', {
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
    });
    

    // Deleting product
    const handleDelete = (product)=>{
        fetch(`http://localhost:5000/addproducts/${product._id}`,{
            method : 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
                if(data.deletedCount > 0){
                    refetch();
                    toast.success('Successfully Deleted')
                }
                refetch();
            })
    }

    // Add vertise
    const handleAdvertise = (product)=>{
        const date = new Date();
        const currentDate = date.toLocaleDateString()
        const advertiseProduct = {
            name : product.name,
            price : product.price,
            condition : product.condition,
            image : product.image,
            location : product.location,
            description : product.description,
            purchaseYear : product.purchaseYear,
            postDate : currentDate
        }
        fetch('http://localhost:5000/addadvertise',{
            method:'POST',
            headers:{
                'content-type' : 'application/json',
                authorization: `bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify(advertiseProduct)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
        })

    }


if(isLoading){
    return <Loading></Loading>
}

    return (
        <div>
            <h1 className='text-center font-bold'>My Product</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Purchase Year</th>
                            <th>Action</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr key={product._id}>
                                <th>{index + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-full">
                                        <img src={product.image} alt=''/>
                                    </div>
                                </div></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.purchaseYear}</td>
                                <td><label onClick={()=>setDeleteProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                                <td><label onClick={()=>handleAdvertise(product)} className="btn btn-sm btn-error">Add Advertise</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletProduct && <ConfirmationalModal
                title = {`are you sure want to delete?`}
                handleDelete = {handleDelete}
                deleteButton = 'Delete'
                deleteData = {deletProduct}
                closeModal={closeModal}
                >

                </ConfirmationalModal>
            }
        </div>
    );
};

export default MyProduct;