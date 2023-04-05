import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';


function Product() {
    const params = useParams();
   const [productData, setProductData] = useState({});
    const id = params?.productID


    React.useEffect(() => {
        const fetchData = async () => {
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(data => setProductData(data))
                .catch(err => console.log(err))
        }
        fetchData();
    }, []);



    console.log(productData);

    return (

        <div className=' w-[90%]  mt-[5%] h-[50%]  '>
            <p className='text-5xl flex justify-center  uppercase mb-[5%]'>{productData.category}</p>
            <div className='flex justify-center'>
            <div className='w-full mr-[10%]'>
            <img className='ml-[10%] mr-[10%] h-[400px] w-[200%]  ' src={productData?.image}/>
            </div>
            <div>
            <p className='text-3xl m-[5%] '>{productData.title}</p>
            <p className='text-lg ml-[5%] '>{productData.description}</p>
            <p className='text-3xl ml-[5%] mt-[3%]'>Price: ${productData.price}</p>
            </div>
            </div>
            <div className='mt-[5%] ml-[2%]'>
            <button  class="bg-red-500 hover:bg-red-700 text-white w-[18%]  font-bold py-2 px-4 rounded text-center mr-[1%] ">BUY NOW</button>
            <button  class="bg-red-900 hover:bg-red-300 text-white w-[18%] font-bold py-2 px-4 rounded text-center ">ADD TO CART</button>
            </div>
            
            
            
            
            {/* <p>{productData.rating}</p> */}
            
        </div>
    )
}

export default Product
