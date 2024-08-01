import React from 'react'
import newcard from "../../../public/assest/icons/newcard.svg"
import Credit from "../../../public/assest/icons/credit.svg"
import debit from "../../../public/assest/icons/debit.svg"

export const ChequesCardsContent = () => {
  const accoun =[
    {
      icon:debit,
      name:"Debit"
    },
    {
      icon:Credit,
      name:"Credit"
    },
    {
      icon:newcard,
      name:"Request a New card"
    },
    
  ]
  return (
    <>
    <div className="w-full">
      <div className="">
        <h2 className='pb-[20px] font-[600] text-[15px] leading-[22.5px] poppins'>Cards</h2>
        <div className="flex-col lg:justify-start  justify-center items-center lg:flex-row flex gap-[20px]">
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

