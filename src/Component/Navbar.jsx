
import { useState } from 'react'
import { Link } from 'react-router-dom'
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
export default function Navbar() {

    const { cart } = useContext(CartContext);

    const totalProducts = cart.reduce(
        (total, item) => total + item.qty,
        0
    );
    const [menu, setMenu]=useState("Home")
    return (
      <>
            <div className='h-25 pl-0 border-b-1 flex gap-10  '>
                <div className='flex'>
                <img className='h-24 w-20 ml-20' src="https://static.vecteezy.com/system/resources/previews/014/928/436/non_2x/check-mark-shopping-bag-logo-shopping-bag-icon-for-online-shop-business-logo-free-vector.jpg" />
                    <p className='mt-8 text-3xl font-bold'>Shopify</p>
                </div>
                <ul className='flex gap-13 text text-gray-500 text-[17px] font-bold mt-10 ml-50 cursor-pointer '>
                    <Link to="/"> <li onClick={() => { setMenu("Home") }}>Home{menu === "Home" ? <hr className='border-red-500 border-2 '></hr> : <></>}</li></Link> 
                    <Link to="/men">  <li onClick={() => { setMenu("Men") }}>Men{menu === "Men" ? <hr className='border-red-500 border-2 '></hr> : <></>}</li></Link>
                    <Link to="/women"> <li onClick={() => { setMenu("Women") }}>Women{menu === "Women" ? <hr className='border-red-500 border-2'></hr> : <></>}</li></Link>
                    <Link to="/kids">  <li onClick={() => { setMenu("Kids") }}>Kids{menu === "Kids" ? <hr className='border-red-500 border-2 '></hr> : <></>}</li></Link>
                </ul>
                <Link to="/login"> <button className=' bg-red-500 text-white h-10 w-30 font-bold rounded-3xl border-1 mt-8 ml-30 cursor-pointer transform transition duration-200 hover:bg-black'>Login</button></Link>
                <div className='relative ml-8 cursor-pointer'>
                    <Link to="/cart">   <img className='h-10 w-11 mt-8' src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png" /></Link>
                    <div className='h-6 w-6 text-white font-bold bg-red-600 absolute left-8 top-6  rounded-[50%] text-center'>{totalProducts}</div>
                </div>
            </div>
        </>
  )
}
