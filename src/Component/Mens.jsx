import React from 'react'
import mensData from './MenData'
import MensData from './MensData'
import Hero from './Hero'
export default function Mens() {
    return (
       <>
                  <div>
                  <Hero />
            </div>
      <div className='flex flex-wrap justify-center mt-20  gap-10 container mx-auto '>
          {
              mensData.map((item) =>  <MensData key={item.id } value={item} />)
      }
            </div>
            </>
  )
}
