// src/components/AuthScreens/Address/AddressPage.tsx
"use client"
import { HomeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';
import { Signupnavbar } from '../AuthNavbar/SignupPage';

const AddressPage: React.FC = () => {


  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/Addres');
  };
  return (
    <div className="bg-[#F4F4F4] logins">
        <Signupnavbar />
        <div className="subSignup  poppins">
          <span className='font-[500] text-[12px] leading-[18px] text-[#7F7F7F] mb-[20px] h-[18px]'>Step 1 of 5</span>
          <h1 className='font-[500] text-[24px] leading-[36px] text-center md:text-start text-[#00000] mb-[10px]'>Welcome, Let’s get you started</h1>
          <p className='font-[500] lg:px-[0px] px-[14px] text-center md:text-start text-[12px] leading-[18px] mb-[40px]'>Provide the information below to create your access internet banking profile</p>
          <form onSubmit={handleSubmit} className='mx-[10px]'>
            <label className='mb-[20px] text-[#7F7F7F] pl-[10px] flex justify-start items-center'>
              <HomeIcon className="text-[#7F7F7F] h-6 w-6 pr-[7px]" />
              <input
                className='nunito'
                type="text"
                placeholder='First Name'
                value=""
                 
                required
              />
            </label>
            
           
            <label className='mb-[20px]  text-[#7F7F7F] pl-[10px] flex justify-start items-center'>
            <select
              className='nunito bg-[#fff]  text-[19px]'
              value=""
             
            >
              <option value="NG">🇳🇬</option>
              <option value="US">🇺🇸</option>
              <option value="GB">🇬🇧</option>
            </select>
                
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
        src=""
        className='w-[100%] '
        alt=''
        />
     </div>
     </div>
      </div>
  );
};

export default AddressPage;
