import React from 'react'
import came from "../../../public/assest/icons/event-calendar-587 1.svg"
import trans from "../../../public/assest/icons/trans.svg"
import bold from "../../../public/assest/icons/transferbold.svg"

export const TransfersContent = () => {
  const accoun =[
    {
      icon:trans,
      name:"9 Mileon Transfer"
    },
    {
      icon:bold,
      name:"Other Banks Transfer"
    },
    {
      icon:came,
      name:"Scheduled Transfer"
    },
  ]
  return (
    <>
    <div className="w-full">
      <div className="">
        <h2 className='pb-[20px] font-[600] text-[15px] leading-[22.5px] poppins'>Transfers</h2>
        <div className="flex-col lg:flex-row flex gap-[20px]">
          {accoun.map((items,index)=>(
            <div className="w-[163px] h-[143px] rounded-[20px] bg-[#FFFFFF] p-[22px]" key={index}>
              <img src={items.icon.src} alt="source" />
              <h3 className='font-[600] text-[15px] leading-[22.5px] poppins pt-[15px]'>{items.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
