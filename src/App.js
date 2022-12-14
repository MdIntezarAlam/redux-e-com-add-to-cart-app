import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Products, ProductDetails, PageNotFound, Order, Placed } from './pages'
import { Header } from './components'
import './App.css'
import Login from './container/Login'

const App = () => {
    return (
        <BrowserRouter>
        <Header />
        <div className='app_container'>
        <Routes>
        {/* <Route exact path="/" element={<Navigate to="/products" />} /> */}
                    <Route path="/" element={<Login  />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:productId" element={<ProductDetails />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/place" element={<Placed />} />
                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default App
