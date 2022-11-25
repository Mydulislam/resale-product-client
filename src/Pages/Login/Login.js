import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div className='mt-12 h-[90vh] flex justify-center'>
            <div className='lg:w-2/6'>
                <h1 className='text-4xl text-center mb-3'>Login</h1>
                <div className='border border-solid p-4 rounded-md'>
                    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" {...register("email")} placeholder="Your Email" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" {...register("password")} placeholder="Password" className="input input-bordered w-full" />
                        </div>
                        <input className='btn btn-primary w-full text-white mt-5' value='Login' type="submit" />
                    </form>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline uppercase w-full">Login With Google</button>
                </div>

            </div>

        </div>
    );
};

export default Login;