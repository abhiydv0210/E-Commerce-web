import React from 'react'

function ForgetPassword() {
    return (
        <>
            <div class="bg-grey-lighter min-h-screen flex flex-col rounded-lg">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <div className='flex md:justify-between'>
                            <h1 class="mb-8 text-3xl text-center">OTP</h1>
                            <h1><i class="fa-solid fa-xmark text-3xl"></i></h1>
                        </div>
                        <div>
                            <label className='text-lg'>E-mail</label>
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />
                        </div>
                        <div>
                            <label className='text-lg'>OTP</label>
                            <input

                                type="text" inputmode="numeric" autocomplete="one-time-code"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirm_password"
                                placeholder="Confirm OTP" />
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
