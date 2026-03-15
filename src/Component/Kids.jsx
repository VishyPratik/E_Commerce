import React from 'react'
import kidData from './KidData'
import KidsData from './KidsData'
import Hero from './Hero'
export default function Kids() {
    return (
        <>
            <Hero />
      <div className='flex flex-wrap justify-center mt-20   gap-10 container mx-auto '>
          {
              kidData.map((item) => <KidsData key={item.id} value={item} />) 
          }
    </div>
        </>
  )
}
