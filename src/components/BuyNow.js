import React from 'react'
import Card from './Card'

function BuyNow() {
    return (
        <div>
            <div >
                <div class="bg-grey-500 min-h-screen flex flex-col rounded-lg">
                    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <div className='flex md:justify-between'>
                                <h1 class="mb-8 text-3xl text-center">MAKE PAYMENT</h1>
                                <h1><i class="fa-solid fa-xmark text-3xl " ></i></h1>
                            </div>
                            <div>
                                <label className='text-lg'>First Name</label>
                                <input

                                    type="text"

                                    class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="FirstName"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <label className='text-lg'>Last Name</label>
                                <input
                                    type="text"

                                    class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="fullname"
                                    placeholder="Last Name"
                                />
                            </div>

                            <div>
                                <label className='text-lg'>ENTER CARD NUMBER</label>

                                <input
                                    type="password"

                                    class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="password"
                                    placeholder="XXXX XXXX 1234" />

                            </div>
                            <h1>Expiry Date on Card</h1>
                            <div className='flex '>

                                <div className='mr-[2%]'>
                                    <label className='text-lg'> DATE</label>
                                    <input

                                        type="date"

                                        class="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="confirm_password"
                                        placeholder="CARD DATE"
                                    />
                                </div>
                                <div>
                                    <label className='text-lg'>ENTER CVV</label>
                                    <input

                                        type="password"

                                        class="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="confirm_password"
                                        placeholder="XXX"
                                    />
                                </div>
                            </div>




                            <button
                                type="submit"
                                class="w-full text-center py-3 text-xl rounded bg-green bg-blue-800 text-slate-50 hover:bg-green-dark focus:outline-none my-1"
                            >Proceed TO PAY</button>



                        </div>
                    </div>
                </div>
            </div>
           
            )

        </div>
    )
}

export default BuyNow
