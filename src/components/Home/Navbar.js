import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropmenu from '../Dropmenu';
import img from '../../Assests/png3.jpg';
import FakeApi from './FakeApi';
import SignUp from '../SignUp';
import LoginPage from '../../pages/LoginPage';

import Footer from './Footer';
import Header from './Header';
import BuyNow from '../BuyNow';
import Card from '../Card';


function Navbar() {
    const [login, setLogin] = useState(false);
    

    function handleClick() {
        setLogin(true);
    }
    console.log(login, ">>>>")
    return (
        <>
            <div className='bg-cover sm:w-full' style={{ backgroundImage: `url(${img})` }}>


                <header class="text-slate-50 body-font ">
                    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                        <nav class="md:ml-auto md:mr-auto sm:text-center sm:text-xs  flex flex-wrap items-center text-xl  justify-center bg-black h-20 w-[100%] sm:w-[90%] md:w-[50%] lg:w-[80%] lg:text-lg  border  rounded-lg  focus:ring-blue-500 focus:border-blue-500">
                            <a class="mr-5 hover:text-red-500">Best Seller</a>
                            <a class="mr-5 hover:text-red-500">Gift Ideas</a>
                            <a class="mr-5 hover:text-red-500">New Releases</a>
                            <a class="mr-5 hover:text-red-500">Today's deals</a>
                            <a class="mr-5 hover:text-red-500">Customer Service</a>
                        </nav>

                    </div>
                </header>

                <h1 class='text-5xl text-slate-50 container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center w-[100%] sm:w-[100%] md:w-[50%] lg:w-[60%]'>Eflyer</h1>
               
                <div>
                    <h1 class='text-6xl text-slate-50 container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center sm:text-2xl'>GET START </h1>
                    <h1 class='text-5xl  text-slate-50  container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center sm:text-2xl sm:text-center sm:flex sm:center'>YOUR FAVOURITE SHOPPING </h1>
                </div>
                <br></br>
                <div className='sm:w-[100%]'>
                    <Link to='/login'>
                     <p class='text-slate-50 mt-[5%] container mx-auto flex flex-wrap sm-w-[40%] flex-col md:flex-row justify-center items-center bg-black  h-16 w-[13%] sm:text-lg sm:bg-black   border  rounded-lg  focus:ring-blue-500 focus:border-blue-500 text-2xl"' onClick={handleClick}>
                        Login</p>
                    </Link>
                  
                <br></br>
                

            </div>
            <div>
                <h1 class='text-5xl sm:text-2xl	font-weight: 800 container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center'>Men & Women Fashion </h1>
            </div>
            <div>
                {login===true && <LoginPage setLogin={setLogin}/>}
                {/* <LoginPage/> */}
            </div>
            
            </div>
            <div>  
                <FakeApi/>
                {/* <Card/> */}
                </div>
                
            
            
           
        </>
    )
}

export default Navbar
