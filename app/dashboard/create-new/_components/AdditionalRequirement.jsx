import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function AdditionalRequirement({additionalReqInput}) {
  return (
    <div className='mt-5'>
        <label className='text-slate-400'>Enter Additional Requirements (Optional)</label>

      <Textarea className='mt-2' onChange={(e)=>additionalReqInput(e.target.value)}/>
    </div>
  )
}

export default AdditionalRequirement
