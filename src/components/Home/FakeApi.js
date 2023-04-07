import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import {Product} from '../Product';






function FakeApi() {
  const [data, setData] = useState([]);




  useEffect(() => {
    
         axios.get('http://192.168.29.145:3001/api/product')
        .then(response => {
          setData(response?.data)
          console.log(response, '==============>');
        })

        .catch(error => {
          console.log(error)
      });

    
    
  }, []);

  console.log(data, "datadata")

  return (
    <>


      <div className='flex flex-wrap justify-evenly'>
        {data?.map((item) => {
          return (
            <div key={item?.id} className='border-2 rounded-lg m-4 w-[350px]'>
              {/* <p className='text-3xl text-center'> {item?.category}</p> */}
              <div className='w-3/4 mx-auto'>
                <img className='w-full h-[350px] mr-[20px] m-5' src={item?.imageurl} />
              </div>
              
              {/* <p className='text-2xl text-center'>{item?.price?.actualPrice}</p> */}
              <p className='text-xl text-center'>{item?.price?.discountPrice}</p>
              {/* <p className='text-xl text-center'>{item?.rating?.overall}</p> */}
              {/* <p className='text-2xl text-center'>{item?.discountPrice}</p> */}
              {/* <p className='text-2xl text-center'>{item?.actualPrice}</p> */}
              {/* <p className='text-2xl text-center'>{item?.discountPercentage}</p> */}
              <div className='flex justify-end mb-[3%] mr-[3%] '>
              <button  class="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 text-2xl rounded text-center">
              <Link to={'Product/' + item?.id}>
                Buy now
                </Link>
              </button>
            </div>
            </div>
          );
        })}
      </div>

    </>
  )
}


export default FakeApi
