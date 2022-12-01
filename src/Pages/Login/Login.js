import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
// import useToken from '../../hooks/useToken';

const Login = () => {
    const {login, googleSign} = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    // const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    // if(token){
    //     navigate(from, {replace:true});
    // }
    const handleLogin = (data)=>{
        setLoginError('')
        login(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoginError('');
            toast.success('Login Successfully');
            // setLoginUserEmail(data.email)
            navigate(from, {replace:true});
        })
        .catch(err => setLoginError(err.message))
    }
    const handleGoogleSignIn = ()=>{
        googleSign(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user.email);
            // setLoginUserEmail(user.email)
            saveUserDatabase(user.displayName, user.email)
            navigate(from, {replace:true});
        })
        .catch(err => setLoginError(err.message))
    }

    const saveUserDatabase = (name, email, role='buyer') => {
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
            })
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
                    <button onClick={handleGoogleSignIn} className="btn btn-outline uppercase w-full">Login With Google</button>
                </div>

            </div>

        </div>
    );
};

export default Login;