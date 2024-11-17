"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function ImageSelection({selectedImage}) {

    const [file,setFile]=useState();

    const onFileSelected =(event)=>{
        console.log(event.target.files[0])
        setFile(event.target.files[0])
        selectedImage(event.target.files[0])
    }
  return (
    <div>
      <label>Select An Image of Your Car.</label>
      <div className='mt-3'>
        <label htmlFor='upload-image'>
            <div className={`p-28 border rounded-xl border-dotted flex justify-center border-blue-600 cursor-pointer hover:shadow-lg bg-slate-200
            ${file&&'p-0 bg-white'}
            `}>
             { !file?  <Image src={'/upload.png'} width={70} height={70} alt=''/>
             :<Image src={URL.createObjectURL(file)} width={300} height={300} alt=''
             className='w-[300px] h-[300px] object-cover'
             />
             
}
            </div>
        </label>
        <input type='file' accept='image/*'
        id='upload-image'
        style={{display: 'none'}}
        onChange={onFileSelected}
        />
      </div>
    </div>
  )
}

export default ImageSelection
