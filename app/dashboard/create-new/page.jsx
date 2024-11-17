"use client"
import React, { useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AdditionalRequirement from './_components/AdditionalRequirement'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '@/config/firebaseConfig'
import { useUser } from '@clerk/nextjs'

function page() {
  const {user}=useUser([])
    const [formData,setFormData]=useState([])
    const onHandleInputChange = (value,fieldName) => {
        setFormData(prev=>({
            ...prev,
            [fieldName]:value
        }))
        console.log(formData)
    }

    const GenerateAiImage = async() => {
        const rawImageUrl = await SaveImageToFirebase();
        const result = await axios.post('/api/redesign-car',{
          imageUrl: rawImageUrl,
          carType: formData?.carType,
          designType: formData?.designType,
          additionalReq: formData?.additionalReq,
          userEmail: user?.primaryEmailAddress?.emailAddress,
        });
        console.log(result.data);
    };

    const SaveImageToFirebase = async() => {
      const fileName = Date.now()+"_raw.png"
      const imageRef=ref(storage,'car-redesign/'+fileName)

      await uploadBytes(imageRef,formData.image).then(resp=>{
        console.log("File uploaded....")
      })

      const downloadUrl = await getDownloadURL(imageRef)
      console.log(downloadUrl)
      return downloadUrl
    }
  return (
    <div>
      <h2 className='font-bold text-4xl text-blue-500 text-center'>Experience The Magic Of AI Remodelling</h2>
      <p className='text-center text-gray-500'>Transform any car and its interiors with a click. Select an image, choose a style, and watch as AI instantly reimagines your car.</p>

      <div className='grid grid-cols-1 md:grid-cols-2  mt-10 gap-10'>
        <ImageSelection selectedImage={(value)=>onHandleInputChange(value,'image')}/>
        <div>
            <RoomType selectedCarType={(value)=>onHandleInputChange(value,'carType')}/>
            <DesignType selectedDesignType={(value)=>onHandleInputChange(value,'designType')}/>
            <AdditionalRequirement additionalReqInput={(value)=>onHandleInputChange(value,'additionalReq')} />
            <Button className='w-full mt-5 bg-blue-500 rounded-full' onClick={GenerateAiImage}>Generate</Button>
        </div>
      </div>
    </div>
  )
}

export default page
