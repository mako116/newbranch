import React from 'react'
import bil from "../../../public/assest/icons/bill.svg"
import util from "../../../public/assest/icons/utlity.svg"
import airtime from "../../../public/assest/icons/airtime.svg"
import fund from "../../../public/assest/icons/funding.svg"
import cable from "../../../public/assest/icons/cable.svg"

export const BillPaymentsContent = () => {
  const accoun =[
    {
      icon:bil,
      name:"Bill Payment"
    },
    {
      icon:airtime,
      name:"Airtime & Data Top-up"
    },
    {
      icon:util,
      name:"Utility"
    },
    {
      icon:cable,
      name:"Cable TV"
    },
    {
      icon:fund,
      name:"Sport Wallet Funding"
    },
  ]
  return (
    <>
    <div className="w-full">
      <div className="">
        <h2 className='pb-[20px] font-[600] text-[15px] leading-[22.5px] poppins'>Transfers</h2>
        <div className="flex-col  justify-center items-center lg:flex-row flex gap-[20px]">
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

