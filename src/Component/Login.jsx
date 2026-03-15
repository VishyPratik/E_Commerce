import React, { useState } from 'react'

export default function Login() {
    function handler() {
        alert("Your Login Successfully")
    }
  return (
      <div className=' pt-10 font-sans relative' >
          <div className='align-center  h-109 w-100 bg-white border  border-gray-300 rounded-2xl pl-12 pt-10  align-center bottom-0 container mx-auto'>
              <h1 className='font-bold text-2xl'>Sign Up</h1>
              <div><input className='h-8 w-75 border-1 mt-6 pl-5 text-[16px] rounded font-bold' type="name" placeholder='Your Name' /></div> 
              <div>  <input className='h-8 w-75 border-1 mt-6 pl-5 text-[16px] rounded font-bold' type="mail" placeholder='Email Address' /></div> 
              <div > <input className='h-8 w-75 border-1 mt-6 pl-5 text-[16px] rounded font-bold' type="password" placeholder='Password' /></div> 
              <button onClick={()=>handler()} className='h-8 w-75 border-1 mt-12 rounded bg-red-500 text-white text-[16px] font-bold cursor-pointer'>Continue</button>
              <p className='mt-3 text-[15px] font-bold text-gray-600'>Already have an accout ? <spam className="text-red-500">Login here</spam></p>
              <div className='flex'>
              <input type="checkbox" />
                  <p className='text-[15px] font-bold text-gray-600 mt-5 ml-1'>By continuing, i agree to the terms of use & privacy policy</p>
              </div>
              </div>
    </div>
  )
}
