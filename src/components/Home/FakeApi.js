import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Product} from '../Product';






function FakeApi() {
  const [data, setdata] = useState([]);




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setdata(response.data);

      } catch (error) {
        console.error(error);
      }

    }
    fetchData();
  }, []);

  console.log(data, "datadata")

  return (
    <>


      <div className='flex flex-wrap justify-evenly'>
        {data?.map((item) => {
          return (
            <div key={item?.id} className='border-2 rounded-lg m-4 w-[350px]'>
              <p className='text-3xl text-center'> {item?.category}</p>
              <div className='w-3/4 mx-auto'>
                <img className='w-full h-[350px] mr-[20px] m-5' src={item?.image} />
              </div>
              
              <p className='text-2xl text-center'>${item?.price}</p>
              <p className='text-2xl text-center'>{item?.Rating}</p>
              <div className='flex justify-end mb-[3%] mr-[3%] '>
              <button  class="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded text-center">
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
