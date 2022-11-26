import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('')
    const handleLogin = (data)=>{
        setLoginError('')
        login(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoginError('')
        })
        .catch(err => setLoginError(err.message))
    }
    return (
        <div className='mt-12 h-[90vh] flex justify-center'>
            <div className='lg:w-2/6'>
                <h1 className='text-4xl text-center mb-3'>Login</h1>
                <div className='border border-solid p-4 rounded-md'>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email"
                             {...register("email",{required:"Email Address is Required"})} 
                             placeholder="Your Email" 
                             className="input input-bordered w-full" />
                             {errors.email && <p className='text-red-600' role='alert'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password"
                             {...register("password",
                             {
                                required:"Password is Required",
                                minLength:{value:6, message:'Password must be 6 character'}
                            })} 
                             placeholder="Password" 
                             className="input input-bordered w-full" />
                             {errors.password && <p className='text-red-600' role='alert'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn btn-primary w-full text-white mt-5' value='Login' type="submit" />
                        {
                            loginError && <p className='text-red-600'>{loginError}</p>
                        }
                        <p className='mt-4'>You are new? Please <Link className='underline text-primary' to='/signup'>Signup Now</Link></p>
                    </form>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline uppercase w-full">Login With Google</button>
                </div>

            </div>

        </div>
    );
};

export default Login;