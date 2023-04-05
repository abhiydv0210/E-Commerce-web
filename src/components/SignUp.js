import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    clear,
    setFirstname,
    setLastname,
    setEmail,
    setPassword,
    setConfirmpassword
} from './Store/reducer/Signup.slice';


function SignUp({setSignIn}) {
    const firstname = useSelector((state) => state?.SignupSlice?.firstname);
    const lastname = useSelector((state) => state?.SignupSlice?.lastname);
    const email = useSelector((state) => state?.SignupSlice?.email);
    const password = useSelector((state) => state?.SignupSlice?.password);
    const confirmpassword = useSelector((state) => state?.SignupSlice?.confirmpassword);
    const dispatch = useDispatch();
    function HandleSignupclose() {
       setSignIn (false);
       
    }
    
    return (
        <div>
            <div class="bg-grey-lighter min-h-screen flex flex-col rounded-lg">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <div className='flex md:justify-between'>
                            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                            <h1><i class="fa-solid fa-xmark text-3xl " onClick={HandleSignupclose}></i></h1>
                        </div>
                        <div>
                            <label className='text-lg'>First Name</label>
                            <input

                                type="text"
                                value={firstname}
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="FirstName"
                                placeholder="First Name" 
                                onChange={(e) => dispatch(setFirstname(e.target.value))}/>
                        </div>
                        <div>
                            <label className='text-lg'>Last Name</label>
                            <input
                                type="text"
                                value={lastname}
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                placeholder="Last Name" 
                                onChange={(e) => dispatch(setLastname(e.target.value))}/>
                        </div>
                        <div>
                            <label className='text-lg'>Email</label>
                            <input
                                type="text"
                                value={email}
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => dispatch(setEmail(e.target.value))} />
                        </div>
                        <div>
                            <label className='text-lg'>Password</label>

                            <input
                                type="password"
                                value={password}
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" 
                                onChange={(e) => dispatch(setPassword(e.target.value))}/>
                        </div>
                        <div>
                            <label className='text-lg'>Confirm Password</label>
                            <input

                                type="password"
                                value={confirmpassword}
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirm_password"
                                placeholder="Confirm Password"
                                onChange={(e) => dispatch(setConfirmpassword(e.target.value))} />
                        </div>



                        <div class="text-center text-sm text-grey-dark mt-4  mb-4">
                            <input
                                class="relative float-left mt-[0.15rem] mr-[3px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid text-black outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                                type="checkbox"
                                value=""
                                id="checkboxDefault" />

                            <a class="no-underline border-b border-grey-dark text-grey-dark " href="#">
                                Agree to the Terms of Service Privacy Policy
                            </a>

                        </div>
                        <button
                            type="submit"
                            class="w-full text-center py-3 text-xl rounded bg-green bg-blue-800 text-slate-50 hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>


                        <div class="text-grey-dark mt-6">
                            

                            <a class="no-underline border-b border-blue text-blue flex justify-center text-xl text-red-500" href="../login/">
                                Log in
                            </a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
