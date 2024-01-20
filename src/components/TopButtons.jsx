import React from 'react'

export default function TopButtons() {
 const cities = [{
    id:1,
    title:'Multan'
 },
 {
    id:2,
    title:'Lahore'
 },
 {
    id:3,
    title:'Peshawar'
 },
 {
    id:4,
    title:'Islamabad'
 },
 {
    id:5,
    title:'Karachi'
 },

]
    return (
    <div className='flex items-center justify-around my-6'>
        {
            cities.map((city)=> (
                <button key={city.id} className='text-lg font-medium text-white'>{city.title}
                </button>
            ))
        }
      
    </div>
  )
}
