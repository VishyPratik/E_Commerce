
import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom';
export default function ProductShow({ product }) {
    const { addToCart } = useContext(CartContext);
  return (
      <div className='flex ml-20'>
          <div className=''>
              <img
                  src={product.image}
                  alt={product.name}
                  className="w-50 h-30 "
              />
              <img 
                  src={product.image}
                  alt={product.name}
                  className="w-50 h-30 pt-2"
              />
              <img
                  src={product.image}
                  alt={product.name}
                  className="w-50 h-30  pt-2"
              />
              <img
                  src={product.image}
                  alt={product.name}
                  className="w-50 h-30  pt-2"
              />
    </div>
          <div >
              <img
                  src={product.image}
                  alt={product.name}
                  className="w-90 h-120  pl-4"
              />
          </div>

          <div className='ml-20'>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className='flex gap-3 mt-1'>
                  <img className='h-8 w-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlbknLAESnOINVAGOyL_utzdTgT6UK7ehEqg&s"  />
                  <img className='h-8 w-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlbknLAESnOINVAGOyL_utzdTgT6UK7ehEqg&s" />
                  <img className='h-8 w-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlbknLAESnOINVAGOyL_utzdTgT6UK7ehEqg&s" />
                  <img className='h-8 w-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlbknLAESnOINVAGOyL_utzdTgT6UK7ehEqg&s" />
              </div>
              <p className="text-gray-500 line-through font-bold mt-1 text-2xl">
                  ₹{product.oldPrice}
              </p>

              <p className="text-2xl font-bold text-green-600">
                  ₹{product.newPrice}
              </p>
              <p className='h-19 w-160 font-bold text-[17px] mt-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati aspernatur corrupti aliquam eos ipsum dolores impedit laborum labore commodi nesciunt, odit omnis harum quisquam quaerat, blanditiis, delectus neque sit officiis!</p>
              <h1 className='font-bold text-[18px] text-gray-400 mt-2'>Select Size</h1>
              <div className='flex gap-6 text-[20px] font-bold text-center mt-3'>
                  <p className='h-9 w-12  bg-gray-300'>S</p>
                  <p className='h-9 w-12  bg-gray-300'>M</p>
                  <p className='h-9 w-12  bg-gray-300'>L</p>
                  <p className='h-9 w-12  bg-gray-300'>XL</p>
                  <p className='h-9 w-12  bg-gray-300'>XXL</p>
              </div>
              <Link to="/cart"> <button onClick={() => addToCart(product)} className='h-10 w-90  mt-5 bg-red-500 font-bold text-white text-[20px] cursor-pointer hover:bg-black'>Add To Cart</button></Link>
              <p className="mt-2 text-2xl font-bold">
                  Category: {product.category}
              </p>

          </div>
    </div>
  )
}
