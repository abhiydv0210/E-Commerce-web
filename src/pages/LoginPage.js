import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import SignUp from '../components/SignUp';
import {
    setEmail,
    setPassword
} from '../components/Store/reducer/Login.slice';
import ForgetPassword from '../components/ForgetPassword';

const SingIn = ({ handleSignIn, setLogin }) => {
    const email = useSelector((state) => state?.LoginSlice?.email);
    const password = useSelector((state) => state?.LoginSlice?.password);
    const dispatch = useDispatch();
    const [Forget, setForgetPassword] = useState(false)
    const [Signin, setSignIn] = useState()


    const fetchLogin = async () => {
        const data = {
            email,password
          };
          
          const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
          
         await  axios.post('http://192.168.29.145:3001/api/user/login', data, config)
            .then(response => {
              setSignIn(response.data)
              console.log(response, '==============>');
            })
            .catch(error => {
                console.error(error)
            })
        

    }




    function handleClose() {
        setLogin(false);
    }
    function handlepassword() {
        setForgetPassword(!Forget);

    }
    return (
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

            <div class="w-[35%] bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div className=' flex md:justify-between'>
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                            Log In</h1>
                        <h1><i class="fa-solid fa-xmark text-3xl" onClick={handleClose}></i></h1>


                    </div>
                    <form class="space-y-4 md:space-y-6" onSubmit={e=>e.preventDefault()} action="#">
                        <div>
                            <label for="email" class="block mb-2  font-medium text-gray-900 dark:text-black text-xl">Your Email</label>
                            <input type="email" name="email" value={email} id="email" class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email here" required="" onChange={(e) => dispatch(setEmail(e.target.value))} />
                        </div>
                        <div>
                            <label for="password" class="block mb-2 font-medium text-gray-900 dark:text-black text-xl">Password</label>
                            <input type="password" name="password" value={password} id="password" placeholder="Enter your Password here" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => dispatch(setPassword(e.target.value))} />
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <Link to='/ForgetPassword'>
                                <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={handlepassword}>Forgot password?</a>
                            </Link>

                        </div>
                        <div>
                            {Forget ? <ForgetPassword Forget={Forget} setForgetPassword={setForgetPassword} /> : ''}
                        </div>
                        <button type="submit" class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-xl" onClick={fetchLogin}>Login</button>
                        <div>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                <Link to='/Signin'>
                                    <a href="#" class="font-medium text-primary-600  hover:underline dark:text-red-500 flex justify-center text-xl" onClick={handleSignIn}>Sign in</a>
                                </Link>
                            </p>

                        </div>
                    </form>
                </div>
            </div>
        </div>)

}


function LoginPage({ setLogin }) {

    const [signin, setSignIn] = useState(false);

    function handleSignIn() {
        setSignIn(!signin);

    }
    console.log("heu");

    return signin ? <SignUp signin={signin} setSignIn={setSignIn} /> : <SingIn handleSignIn={handleSignIn} setLogin={setLogin} />
}

export default LoginPage
