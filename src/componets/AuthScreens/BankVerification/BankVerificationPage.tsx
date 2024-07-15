// src/components/AuthScreens/Address/AddressPage.tsx
"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';
import { Signupnavbar } from '../AuthNavbar/SignupPage';
import sec from "@/../public/assest/9Milebanner.svg"
import { FiKey } from 'react-icons/fi';
const BankPage: React.FC = () => {
  const [Bank, setBank] = useState('');


  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/otp');
  };
  return (
    <div className="bg-[#F4F4F4] logins">
        <Signupnavbar />
        <div className="subSignup  poppins">
          <span className='font-[500] text-[12px] leading-[18px] text-[#7F7F7F] mb-[20px] h-[18px]'>Step 3 of 5</span>
          <h1 className='font-[500] text-[24px] leading-[36px] text-center md:text-start text-[#00000] mb-[10px]'>Add your bank verification number</h1>
          <p className='font-[500] lg:px-[0px] px-[14px] text-center md:text-start text-[12px] leading-[18px] mb-[40px]'>Provide the information below to create your access internet banking profile</p>
          <form onSubmit={handleSubmit} className='mx-[10px]'>
            <label className='mb-[20px] text-[#7F7F7F] pl-[10px] flex justify-start items-center'>
              <FiKey className="text-[#7F7F7F] h-6 w-6 pr-[7px]" />
              <input
                className='nunito'
                type="text"
                placeholder='Bank verification number'
                value={Bank}
                onChange={(e) => setBank(e.target.value)}
                required
              />
            </label>
            <div className="SignupBtn">
            <button type="submit" className='bottons flex justify-center bg-[#5586FF] text-[#fff] poppins font-[600] text-[16px] lg:text-[18px] leading-[27px]'>
              Continue 
              <FaArrowRight className=" text-[#fff] font-[700] mt-[6px]  " />
              </button>
            </div>
          </form>
         </div>
         <div className="hides">
     <div className="absolute bottom-0 right-0 ">
         <Image
        width={100}
        height={50}
        src={sec}
        className='w-[100%]'
        alt=''
        />
     </div>
     </div>
      </div>
  );
};

export default BankPage;
