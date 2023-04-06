import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dummy from '../../pages/Dummy';
import LoginPage from '../../pages/LoginPage';
import BuyNow from '../BuyNow';
import FakeApi from '../Home/FakeApi';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import Navbar from '../Home/Navbar';
import Product from '../Product';
import SignUp from '../SignUp';
import Card from '../Card';



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
                    <Route path="/Product/card" element={<Card/>} />
                    <Route path="/Product/buynow" element={<BuyNow/>} />
                   
                    {/* <Route path="/dummy/:id" element={<FakeApi/>} /> */}
                </Routes>
                <Footer />
            </>
        </BrowserRouter>
    )

}
export default AllRoutes;


