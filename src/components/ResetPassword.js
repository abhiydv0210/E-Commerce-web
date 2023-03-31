import React from 'react'

function ResetPassword() {
    return (
        <>
            <div class="bg-grey-lighter min-h-screen flex flex-col rounded-lg">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <div className='flex md:justify-between'>
                            <h1 class="mb-8 text-3xl text-center">Reset Password</h1>
                            <h1><i class="fa-solid fa-xmark text-3xl"></i></h1>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 font-medium text-gray-900 dark:text-black text-xl">Password</label>
                            <input type="password" name="password" id="password" placeholder="Enter your Password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div>
                            <label for="password" class="block mb-2 font-medium text-gray-900 dark:text-black text-xl">Confirm Password</label>
                            <input type="password" name="password" id="password" placeholder="Enter your Confirm Password " class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>

                        <button
                            type="submit"
                            class="w-full text-center py-3 text-xl rounded bg-green bg-blue-800 text-slate-50 hover:bg-green-dark focus:outline-none mt-4 my-1"
                        >Reset Password</button>

                    </div>
                </div>
            </div>


        </>
    )
}

export default ResetPassword
