import React from 'react'
import products from './AllData'
import ShowData from './ShowData'
import Hero from './Hero'
export default function Shops() {
    
    return (
        <>
         <div>
                  <Hero />
            </div>
    <div className='flex flex-wrap justify-center  gap-10 container mx-auto mt-20 '>
        {
              products.map((item) => <ShowData key={item.id} value={item} />)
            }
            </div>
        </>
  )
}
