import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='bg-black text-slate-500 w-[70%] flex flex-wrap p-5 flex-col md:flex-row justify-center items-center m-5 mt-[10%]  '>

                <header class="text-slate-50 body-font ">

                    <h6 className='text-slate-50 text-2xl flex justify-center item-center'>Eflyer</h6>
                    <div className='flex md:justify-between'>
                        <h6 class="text-lg">Your Email</h6>
                        <h6 class="text-lg">Subscribe</h6>
                    </div>
                    <hr className='text-2xl bg-black'></hr>

                    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">


                        <nav class="md:ml-auto md:mr-auto  flex flex-wrap items-center text-base justify-center bg-black    border  rounded-lg  focus:ring-blue-500 focus:border-blue-500">

                            <a class="mr-2 hover:text-gray-900">Best Seller</a>
                            <a class="mr-2 hover:text-gray-900">Gift Ideas</a>
                            <a class="mr-2 hover:text-gray-900">New Releases</a>
                            <a class="mr-2 hover:text-gray-900">Today's deals</a>
                            <a class="mr-2 hover:text-gray-900">Customer Service</a>
                        </nav>

                    </div>
                    <h6 className='text-lg text-slate-50 flex justify-center item-center '>Helpline Number : +1800-1200-1200</h6>
                    <h6 className='text-lg text-slate-50 flex justify-center item-center'>@1045 All Rights Reserved. By HTML design</h6>
                </header>
            </div>
        </div>
    )
}

export default Footer
