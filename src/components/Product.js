
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import BuyNow from './BuyNow';
import Card from './Card';
import { useNavigate } from "react-router-dom";



function Product() {
    const params = useParams();
    const [productData, setProductData] = useState({});
    const [Buynow, setBuyNow] = useState(false)
    const [card, setCard] = useState(false)
    const [additem, setAddItem] = useState([]);
    
      
  

    let navigate = useNavigate();


    const id = params?.productID


    React.useEffect(() => {
        const fetchData = async () => {
            fetch(`http://192.168.29.145:3001/api/product/${id}`)
                .then(res => res.json())
                .then(data => setProductData(data))
                .catch(err => console.log(err))
        }
        fetchData();
    }, []);




    console.log(productData);
    function handlebuynow() {
        setBuyNow(true);

    }
    function handlecard() {
        setCard(true);
        localStorage.setItem('id',productData?.id);

        navigate("/Product/card");

    }

console.log(productData,'........')

    return (

        <div>
            {Buynow ? <BuyNow /> :
                <section class="text-gray-600 body-font overflow-hidden">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="lg:w-3/4 ml-[1%] mx-auto flex flex-wrap">
                            <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-[2%] h-[5%] object-cover object-center rounded" src={productData?.imageurl} />
                            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6  lg:mt-0 mt-[20%]">

                                <h1 class="text-gray-900 text-3xl title-font uppercase font-medium mb-1">{productData?.description}</h1>
                                {/* <h1 class="text-gray-900 text-xl title-font uppercase font-medium mb-1">{productData.title}</h1> */}
                                <div class="flex mb-4">
                                    <span class="flex items-center">
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>

                                    </span>
                                    <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                        <a class="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a class="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a class="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                                {/* <p class="leading-relaxed">{productData.description}</p> */}
                                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                    <div class="flex">
                                        <span class="mr-3">Color</span>
                                        <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                        <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                        <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                    </div>
                                    <div class="flex ml-6 items-center">
                                        <span class="mr-3">Size</span>
                                        <div class="relative">
                                            <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                                <option>SM</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XL</option>
                                            </select>
                                            <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span class="title-font mr-[2%] font-medium text-2xl text-gray-900">Price: ${productData?.price?.actualPrice}</span>
                                    <span class="title-font font-medium text-2xl text-gray-900">Price: ${productData?.price?.discountPercentage}</span>



                                </div>
                                <div className='flex mt-[40%]'>
                                    <button class="flex  text-white bg-red-500 border-0 mr-[3%] py-2 px-6 focus:outline-none hover:bg-red-900 rounded" onClick={handlebuynow}>BUY NOW</button>

                                    <button class="flex  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded" onClick={handlecard}>ADD TO CARD</button>
                                </div>
                                {/* {Buynow? <BuyNow/>:''} */}

                            </div>
                        </div>
                    </div>

                </section>}









        </div>
    )
}



export default Product
