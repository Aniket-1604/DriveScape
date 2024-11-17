import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function EmptyState() {
  return (
    <div>
        <div className='flex items-center justify-center mt-10 flex-col'>
            <Image src={'/placeholder.png'} width={250} height={250} alt=''/>
            <h2 className='font-medium text-lg text-gray-500'>Revamp Your Ride with AI Magic!</h2>
            <Link href={'/dashboard/create-new'}>
                <Button className='mt-5'>+ Redesign</Button>
            </Link>
        </div>
      
    </div>
  )
}

export default EmptyState
