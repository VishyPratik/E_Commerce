import React from 'react'

export default function Footer() {
  return (
    <div >
          <div className='flex justify-center'>
              <img className='h-30 w-25 ml-20' src="https://static.vecteezy.com/system/resources/previews/014/928/436/non_2x/check-mark-shopping-bag-logo-shopping-bag-icon-for-online-shop-business-logo-free-vector.jpg" />
              <p className='mt-12 text-3xl font-bold'>Shopify</p>
          </div>
          <ul className='flex justify-center mt-7 gap-13 text-[17px] font-bold text-gray-500'>
                  <li>About</li>
                  <li>Products</li>
                  <li>Offices</li>
                  <li>Company</li>
                  <li>Contact</li>
              </ul>
              <div className='flex justify-center gap-10 mt-10'>
                  <img className='h-12 w-12' src="data:image/png;base64,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" />
              <img className='h-12 w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXuJOZzykgBcnzCUFo-Yc7lJZkLnRWAAPmbw&s"  />
              <img className='h-12 w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CfILGj-VPfJ2mAqlf_L2dkR3YLaRPctieg&s"  />
              </div>
          <div className='container mx-auto mt-10 h-1 w-300 bg-gray-500'></div>
              <p className='text-center mt-10 font-bold text-2xl'>Copyright @ 2026-All Right Reserved</p>
      
    </div>
  )
}
