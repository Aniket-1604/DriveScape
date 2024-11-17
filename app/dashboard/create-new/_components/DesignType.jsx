import Image from 'next/image'
import React, { useState } from 'react'

function DesignType({selectedDesignType}) {

    const Design = [
        {
            name: 'Modern',
            image: '/modern.png'
        },
        {
            name: 'Traditional',
            image: '/traditional.png'
        },
        {
            name: 'Rustic',
            image: '/rustic.png'
        },
        {
            name: 'Sporty',
            image: '/sporty.png'
        },
        {
            name: 'Luxury',
            image: '/luxury.png'
        },
        {
            name: 'Minimalistic',
            image: '/mini.png'
        }
    ]
    const [selectedOption, getSelectedOption]=useState()
  return (
    <div className='mt-5'>
      <label className='text-slate-400'>Select Design Type</label>
      <div className='mt- grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {Design.map((design,index)=>(
        <div key={index} onClick={()=>{getSelectedOption(design.name);selectedDesignType(design.name)}}>
            <Image src={design.image} width={100} height={100} alt='' 
            className={`h-[60px] rounded-md hover:scale-105
             transition-all cursor-pointer ${design.name==selectedOption&&'border-2 border-blue-500 rounded-md p-1'}`}
             />
            <h3>{design.name}</h3>
        </div>
      ))}
      </div>
    </div>
  )
}

export default DesignType
