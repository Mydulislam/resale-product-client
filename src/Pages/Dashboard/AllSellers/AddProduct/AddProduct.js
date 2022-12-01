import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
    
    const handleAddProduct = (data) => {
       const image = data.image[0];
       const formData = new FormData();
       formData.append('image', image);
       const url =`https://api.imgbb.com/1/upload?key=${imgHostKey}`;
       fetch(url, {
        method:'POST',
        body : formData 
       })
       .then(res => res.json())
       .then(imageData => {
        if(imageData.success){
            const productInfo = {
                name : data.pname,
                price : data.price,
                condition : data.condition,
                image : imageData.data.url,
                mobileNum : data.mobileNumber,
                location : data.location,
                description : data.description,
                purchaseYear : data.purchaseYear
            }
            
            fetch('http://localhost:5000/addproducts',{
                method: 'POST',
                headers : {
                    'content-type' : 'application/json',
                    authorization : `bearer ${localStorage.getItem('access-token')}`
                },
                body : JSON.stringify(productInfo)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Product Inserted Successfully');
                navigate('/dashboard/myproduct')
            })
            .catch(err => console.log(err.message));
        }
       })
    }
    return (
        <div className='mt-12 h-[90vh] flex justify-center'>
            <div className='lg:w-3/4'>
                <h1 className='text-4xl text-center mb-3'>Add Product</h1>
                <div className='border border-solid p-4 rounded-md'>
                    <form onSubmit={handleSubmit(handleAddProduct)}>
                        <div className="form-control w-full inline">
                            <label className="label"><span className="label-text">Product Name</span></label>
                            <input type="text"
                                {...register("pname", { required: "Product Name is Required" })}
                                placeholder="Product Name"
                                className="input input-bordered w-full" />
                            {errors.pname && <p className='text-red-600' role='alert'>{errors.pname?.message}</p>}
                        </div>

                        <div className="form-control w-full inline">
                            <label className="label"><span className="label-text">Price</span></label>
                            <input type="number"
                                {...register("price", { required: "Price is Required" })}
                                placeholder="Price"
                                className="input input-bordered w-full" />
                            {errors.price && <p className='text-red-600' role='alert'>{errors.price?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Condition</span></label>
                            <select {...register("condition",
                                {
                                    required: 'Condition is Required'
                                })}
                                className='input w-full input-bordered'
                            >
                                <option value="">Select...</option>
                                <option value="excellent">Excellent</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                            </select>
                            {errors.condition && <p className='text-red-600' role='alert'>{errors.condition?.message}</p>}
                        </div>

                        <div className="form-control w-full inline">
                            <label className="label"><span className="label-text">Product Photo</span></label>
                            <input type="file"
                                {...register("image", { required: "Photo is Required" })}
                                className="input input-bordered w-full" />
                            {errors.image && <p className='text-red-600' role='alert'>{errors.image?.message}</p>}
                        </div>

                        <div className="form-control w-full inline">
                            <label className="label"><span className="label-text">Mobile Number</span></label>
                            <input type="number"
                                {...register("mobileNumber", { required: "Mobile Number is Required" })}
                                placeholder="Mobile Number"
                                className="input input-bordered w-full" />
                            {errors.mobileNumber && <p className='text-red-600' role='alert'>{errors.mobileNumber?.message}</p>}
                        </div>

                        <div className="form-control w-full inline">
                            <label className="label"><span className="label-text">Location</span></label>
                            <input type="text"
                                {...register("location", { required: "Location is Required" })}
                                placeholder="Your Location"
                                className="input input-bordered w-full" />
                            {errors.location && <p className='text-red-600' role='alert'>{errors.location?.message}</p>}
                        </div>

                        <div className="form-control w-full inline">
                            <label className="label"><span className="label-text">Description</span></label>
                            <textarea type="text"
                                {...register("description", { required: "Description is Required" })}
                                placeholder="Description"
                                className="input input-bordered w-full" />
                            {errors.description && <p className='text-red-600' role='alert'>{errors.description?.message}</p>}
                        </div>

                        <div className="form-control w-full inline">
                            <label className="label"><span className="label-text">Purchase Year</span></label>
                            <input type="number"
                                {...register("purchaseYear", { required: "Purchase Year is Required" })}
                                placeholder="Purchase Year"
                                className="input input-bordered w-full" />
                            {errors.purchaseYear && <p className='text-red-600' role='alert'>{errors.purchaseYear?.message}</p>}
                        </div>
                        <p className='mt-4 text-center'><button className='btn btn-primary'> Add Product</button></p>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default AddProduct;