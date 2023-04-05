import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dummy from '../../pages/Dummy';
import LoginPage from '../../pages/LoginPage';
import FakeApi from '../Home/FakeApi';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import Navbar from '../Home/Navbar';
import Product from '../Product';
import SignUp from '../SignUp';



function AllRoutes() {
    return (
        <BrowserRouter>
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<Navbar />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/signin' element={<SignUp />} />
                    <Route path="/dummy" element={<Dummy />} />
                    <Route path="/Product/:productID" element={<Product/>} />
                    {/* <Route path="/dummy/:id" element={<FakeApi/>} /> */}
                </Routes>
                <Footer />
            </>
        </BrowserRouter>
    )

}
export default AllRoutes;


