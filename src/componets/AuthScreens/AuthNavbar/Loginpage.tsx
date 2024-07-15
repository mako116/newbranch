import Image from 'next/image'
import React from 'react'
import logo from "../../../..//public/assest/9MileLogo.svg"
export const Loginnavbar = () => {
  return (
    <>
    <div className="">
        <div className="py-[20px] lg:py-[28px] px-[10px] lg:px-[20px] flex justify-start gap-[170px] lg:gap-[400px] ">
            <div className="logo">
                <Image 
                width={100}
                height={20}
                src={logo}
                alt='9MileLogo'
                />
            </div>
            <div className="">
                    <select className='login_navOption p-[8px] inter font-[500] text-[12px] leading-[56px] text-[#00000]'>
                    <option value="inter font-[500] text-[12px] leading-[56px] text-[#00000]">NGN</option>
                    </select>
             </div>
        </div>
    </div>
    </>
  )
}
