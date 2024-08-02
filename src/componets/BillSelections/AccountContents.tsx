import React from 'react'
import tab from "../../../public/assest/icons/tab.svg"
import doc from "../../../public/assest/icons/document.svg"
import pers from "../../../public/assest/icons/personplus.svg"
import state from "../../../public/assest/icons/statement.svg"

export const AccountContent = () => {
  const accoun =[
    {
      icon:tab,
      name:"Transaction History"
    },
    {
      icon:state,
      name:"Generate Statement"
    },
    {
      icon:doc,
      name:"Signed Statement"
    },
    {
      icon:pers,
      name:"Beneficiaries"
    },
     

  ]
  return (
    <>
    <div className="w-full">
      <div className="">
        <h2 className='pb-[20px] font-[600] text-[15px] leading-[22.5px] poppins'>Accounts</h2>
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
