import React from 'react'
import womenData from './WomenData'
import WomensData from './WomensData'
import Hero from "./Hero"
export default function Womens() {
    return (
        <>
            <div>
            <Hero />
      </div>
      <div className='flex flex-wrap justify-center mt-20   gap-10 container mx-auto '>
          {
              womenData.map((item)=><WomensData key={item.id} value={item}></WomensData>)
          }
          
            </div>
        </>
  )
}
