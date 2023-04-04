import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dummy from '../../pages/Dummy';
import LoginPage from '../../pages/LoginPage';
import Navbar from '../Home/Navbar';
import SignUp from '../SignUp';



function AllRoutes() {
    return (
        <BrowserRouter>
            <>
                <Navbar />
                <Routes>
                    <Route path='/login' />
                    <Route path='/SignUp' element={<SignUp />} />
                    <Route path="/dummy" element={<Dummy />} />
                </Routes>
            </>
        </BrowserRouter>
    )

}
export default AllRoutes;


