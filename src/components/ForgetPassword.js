import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    
    setEmail,
    setOTP
} from './Store/reducer/Forget.slice';


function ForgetPassword({Forget,setForgetPassword}) {
    console.log(email,'===============');
    const email = useSelector((state) => state?.ForgetSlice?.email);
    const otp = useSelector((state) => state?.ForgetSlice?.otp);
    const dispatch = useDispatch();
    function handleforgetclose() {
        setForgetPassword(false);
        
    }
    return (
        <>
            <div class="bg-grey-lighter min-h-screen flex flex-col rounded-lg">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <div className='flex md:justify-between'>
                            <h1 class="mb-8 text-3xl text-center" >OTP</h1>
                            <h1><i class="fa-solid fa-xmark text-3xl"onClick={handleforgetclose}></i></h1>
                        </div>
                        <div>
                            <label className='text-lg'>E-mail</label>
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={(e) => dispatch(setEmail(e.target.value))}  />
                        </div>
                        <div>
                            <label className='text-lg'>OTP</label>
                            <input

                                type="text"
                                value={otp}
                                 inputmode="numeric" autocomplete="one-time-code"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirm_otp"
                                placeholder="Confirm OTP"
                                onChange={(e) => dispatch(setOTP(e.target.value))}  />
                        </div>
                        <button
                            type="submit"
                            class="w-full text-center py-3 text-xl rounded bg-green bg-blue-800 text-slate-50 hover:bg-green-dark focus:outline-none  my-1"
                        >Reset Password</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ForgetPassword
