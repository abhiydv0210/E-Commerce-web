import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropmenu from '../Dropmenu';
// import { userContext } from '../App';
import Option from '../Option';

import img from '../../Assests/png3.jpg';
import FakeApi from './FakeApi';
import SignUp from '../SignUp';
import LoginPage from '../../pages/LoginPage';
import ForgetPassword from '../ForgetPassword';
import ResetPassword from '../ResetPassword';
import Footer from './Footer';
import Header from './Header';
//import imsg from "../Assests/png1.jpg"

function Navbar() {
    const [login, setLogin] = useState(false);
    // const setCommerce = useContext(userContext);
    // const { dispatch } = setCommerce

    function handleClick() {
        setLogin(true);
    }
    console.log(login, ">>>>")
    return (
        <>
            <div className='bg-cover' style={{ backgroundImage: `url(${img})` }}>


                <header class="text-slate-50 body-font ">
                    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                        <nav class="md:ml-auto md:mr-auto  flex flex-wrap items-center text-base justify-center bg-black h-20 w-[100%] sm:w-[90%] md:w-[50%] lg:w-[60%]   border  rounded-lg  focus:ring-blue-500 focus:border-blue-500">
                            <a class="mr-5 hover:text-gray-900">Best Seller</a>
                            <a class="mr-5 hover:text-gray-900">Gift Ideas</a>
                            <a class="mr-5 hover:text-gray-900">New Releases</a>
                            <a class="mr-5 hover:text-gray-900">Today's deals</a>
                            <a class="mr-5 hover:text-gray-900">Customer Service</a>
                        </nav>

                    </div>
                </header>

                <h1 class='text-5xl text-slate-50 container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center w-[100%] sm:w-[100%] md:w-[50%] lg:w-[60%]'>Eflyer</h1>
                <div>
                <Header/>
                </div>
                <div>
                    <h1 class='text-6xl text-slate-50 container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center'>GET START </h1>
                    <h1 class='text-5xl  text-slate-50  container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center'>YOUR FAVOURITE SHOPPING </h1>
                </div>
                <br></br>
                <div>
                    <Link to='/login'>
                     <p class='text-slate-50 mt-[5%] container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center bg-black  h-16 w-[13%]    border  rounded-lg  focus:ring-blue-500 focus:border-blue-500 text-2xl"' onClick={handleClick}>
                        Login</p>
                    </Link>
                    

                </div>
                <br></br>

            </div>
            <div>
                <h1 class='text-5xl 	font-weight: 800 container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center'>Men & Women Fashion </h1>
            </div>
            <div>
                {login===true && <LoginPage setLogin={setLogin}/>}
                {/* <LoginPage/> */}
            </div>
            
            <div>
                <Footer/>
            </div>
           
        </>
    )
}

export default Navbar
