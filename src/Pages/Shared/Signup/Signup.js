import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

import Loader from '../Loader/Loader';


const Signup = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loadingEmail,
        errorEmail,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);

    if (loadingEmail || loadingGoogle || updating) {
        return <Loader></Loader>;
    }

    if (errorEmail || errorGoogle || error) {
        toast(`${errorEmail?.message || error?.message || errorGoogle?.message}`)
    }
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log(data)
        navigate('/');
    };

    return (
        <div>

            <div class="card w-1/2 mx-auto bg-base-100 shadow-xl p-20">
                <h2 className='text-violet-600 font-bold text-4xl text-center'>Please Signup!</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label class="form-label inline-block mb-2 text-gray-700">Name</label>
                        <input {...register("name", {
                            minLength: {
                                value: 4,
                                message: 'Name should contain at least 4 character'
                            },
                            required: {
                                value: true,
                                message: "Name is required"
                            }
                        })} className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        {/* {errors.name?.type === 'required' && "First name is required"} */}
                        <span>{errors.name?.type === 'required' && <p className='text-red-500'>{errors.name?.message}</p>}</span>
                        <span>{errors.name?.type === 'minLength' && <p className='text-red-500'>{errors.name?.message}</p>}</span>
                    </div>

                    <div className='mt-5'>
                        <label class="form-label inline-block mb-2 text-gray-700">Email</label>
                        <input {...register("email", {
                            required: {
                                value: true,
                                message: "Email Address is required"
                            }
                        })} className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        <span>{errors.email?.type === 'required' && <p className='text-red-500'>{errors.email?.message}</p>}</span>
                    </div>

                    <div className='mt-5'>
                        <label class="form-label inline-block mb-2 text-gray-700">Password</label>
                        <input {...register("password", {
                            minLength: {
                                value: 8,
                                message: 'Password should be 8 length'
                            },
                            required: {
                                value: true,
                                message: "Password is required"
                            },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
                                message: 'Passsword should contain atleast an uppercase, a lowercase and a  special charactor'
                            }
                        })} className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        <span>{errors.password?.type === 'required' && <p className='text-red-500'>{errors.password?.message}</p>}</span>
                        <span>{errors.password?.type === 'minLength' && <p className='text-red-500'>{errors.password?.message}</p>}</span>
                        <span>{errors.password?.type === 'pattern' && <p className='text-red-500'>{errors.password?.message}</p>}</span>
                    </div>

                    <div className='mt-5'>
                        <input type="submit" value="Submit" className="block w-full px-3 py-1.5 text-base font-normal  bg-violet-600 text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out hover:bg-white hover:text-violet-600 hover:border-violet-600 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer" />
                    </div>
                </form>
                <div className='mt-10'>
                    <button onClick={() => signInWithGoogle()} type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;