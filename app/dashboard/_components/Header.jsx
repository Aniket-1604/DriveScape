"use client"
import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useContext } from 'react'

function Header() {
    const {userDetail,setUserDetail}= useContext(UserDetailContext);
  return (
    <div className='p-5 shadow-sm flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
        <Image src={'/logo.svg'} width={30} height={30} alt=""/>
        <h1 className='font-bold text-lg'>DriveScape</h1>
      </div>

      <Button variant='ghost' className='rounded-full text-blue-600'>Buy More Credits</Button>
      <div className='flex gap-2 items-center'>
        <div className='flex gap-2 item-center p-1 bg-slate-200 px-3 rounded-full'>
            <Image src={'/star.png'} width={20} height={20} alt='' />
            <h2>{userDetail?.credits}</h2>
        </div>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header
