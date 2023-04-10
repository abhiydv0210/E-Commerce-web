import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-center'>
            <div className='bg-black text-slate-500 w-[70%] flex flex-wrap p-5 flex-col md:flex-row flex justify-center items-center m-5 mt-[10%]  '>

                <header class="text-slate-50 body-font ">

                    <h6 className='text-slate-50 text-2xl flex justify-center item-center mb-[3%]'>Eflyer</h6>
                    <div className='flex md:justify-between'>
                        <h6 class="text-lg sm:mr-[26%]">Your Email</h6>
                        <h6 class="text-lg text-red-500">Subscribe</h6>
                    </div>
                    <hr className='text-2xl bg-black'></hr>

                    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">


                        <nav class="md:ml-auto md:mr-auto sm:flex-col sm:text-center lg:flex lg:flex-wrap items-center text-base justify-center bg-black  focus:ring-blue-500 focus:border-blue-500">

                            <a class="mr-2 hover:text-red-500">Best Seller</a>
                            <a class="mr-2 hover:text-red-500 ">Gift Ideas</a>
                            <a class="mr-2 hover:text-red-500">New Releases</a>
                            <a class="mr-2 hover:text-red-500">Today's deals</a>
                            <a class="mr-2 hover:text-red-500">Customer Service</a>
                        </nav>

                    </div>
                    <h6 className='text-lg sm:text-xs lg:text-lg text-slate-50 flex justify-center item-center mb-[10%] sm:text-center  hover:text-red-500 '>Helpline Number : +91-1800-1200-1200</h6>
                    <h6 className='text-lg sm:text-xs lg:text-lg text-slate-50 flex justify-center item-center sm:text-center'>@1045 All Rights Rrvd. By HTML design</h6>
                </header>
            </div>
        </div>
    )
}

export default Footer
