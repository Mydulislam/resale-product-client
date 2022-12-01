import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { signUp, updateUser } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const [tokenUserEmail, setTokenUserEmail] = useState('')
    const [token] = useToken(tokenUserEmail);
    const navigate = useNavigate();
    if(token){
        navigate('/')
    }
    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');
        signUp(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSignUpError('');
                toast.success('User Created Successfully');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUserDatabase(data.name, data.email, data.role)

                    })
                    .catch(err => {
                        setSignUpError(err.message);
                        console.log(err.message);
                    }
                    )
            })
            .catch(err => {
                console.log(err.message);
                setSignUpError(err.message);
            })
    }

    const saveUserDatabase = (name, email, role) => {
        const userInfo = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTokenUserEmail(email)
            })
    }
    return (
        <div className='mt-12 h-[90vh] flex justify-center'>
            <div className='lg:w-2/6'>
                <h1 className='text-4xl text-center mb-3'>SignUp</h1>
                <div className='border border-solid p-4 rounded-md'>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text"
                                {...register("name", { required: "Name is Required" })}
                                placeholder="Your Name"
                                className="input input-bordered w-full" />
                            {errors.name && <p className='text-red-600' role='alert'>{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email"
                                {...register("email", { required: "Email Address is Required" })}
                                placeholder="Your Email"
                                className="input input-bordered w-full" />
                            {errors.email && <p className='text-red-600' role='alert'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password"
                                {...register("password",
                                    {
                                        required: "Password is Required",
                                        minLength: { value: 6, message: 'Password must be 6 character' }
                                    })}
                                placeholder="Password"
                                className="input input-bordered w-full" />
                            {errors.password && <p className='text-red-600' role='alert'>{errors.password?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Role</span></label>
                            <select {...register("role",
                                {
                                    required: 'Role is Required'
                                })}
                                className='input w-full input-bordered'
                                >
                                <option value="">Select...</option>
                                <option value="seller">Seller</option>
                                <option value="buyer">Buyer</option>
                            </select>
                            {errors.role && <p className='text-red-600' role='alert'>{errors.role?.message}</p>}
                        </div>

                        <input className='btn btn-primary w-full text-white mt-5' value='Signup' type="submit" />
                        {
                            signUpError && <p className='text-red-600'>{signUpError}</p>
                        }
                        <p className='mt-4'>Already Have an Account. Please <Link className='text-primary underline' to='/login'> Login</Link></p>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default SignUp;