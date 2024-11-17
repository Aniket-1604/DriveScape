import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

function RoomType({selectedCarType}) {
  return (
    <div>
        <label className='text-slate-400'>Select An Image Of Your Car</label>
      <Select onValueChange={(value)=>selectedCarType(value)}>
        <SelectTrigger className="w-full">
            <SelectValue placeholder="Dashboard" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="dashboard">Dashboard</SelectItem>
            <SelectItem value="wheels">Wheels & Rim</SelectItem>
            <SelectItem value="seat">Seat Fabric</SelectItem>
            <SelectItem value="body">Body Paint & Finish</SelectItem>
            <SelectItem value="lights">Headlights & Taillights</SelectItem>
            <SelectItem value="custom">Custom</SelectItem>
        </SelectContent>
        </Select>

    </div>
  )
}

export default RoomType
