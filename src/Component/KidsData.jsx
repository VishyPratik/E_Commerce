import React from 'react'
import { Link } from 'react-router-dom'
export default function KidsData({value}) {
  return (
    
      <Link to={`/product/${value.id}`}>
          <div className='h-90 w-60 border-1 rounded-2xl transform transition duration-200 hover:scale-90'>

                  <img className="h-65 w-60 rounded-2xl " src={value.image} />
                  <p className="mt-3 ml-3 font-bold  text-2xl">{value.name}</p>
                  <div className="flex gap-3  ml-3 font-bold text-2xl">
                      <p className="line-through">₹{value.oldPrice}</p>
                      <p>, ₹{value.newPrice}</p>
                  </div>

          </div>
          </Link>
   
  )
}
