// src/components/AuthScreens/Address/AddressPage.tsx
"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';
 import sec from "@/../public/assest/9Milebanner.svg"
import { FiKey } from 'react-icons/fi';
import { EyeIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import { Signupnavbar } from '../../AuthNavbar/SignupPage';
const GetstartedPage: React.FC = () => {
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordLock = () => {
    setIsLocked(!isLocked);
  };
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/otp');
  };
  return (
    <div className="bg-[#F4F4F4] logins">
        <Signupnavbar />
        <div className="subSignup  poppins">
          <span className='font-[500] text-[12px] leading-[18px] text-[#7F7F7F] mb-[20px] h-[18px]'>Step 1 of 5</span>
          <h1 className='font-[500] text-[24px] leading-[36px] text-center md:text-start text-[#00000] mb-[10px]'>Welcome, Let’s get you started</h1>
          <p className='font-[500] lg:px-[0px] px-[14px] text-center md:text-start text-[12px] leading-[18px] mb-[40px]'>Provide the information below to create your access internet banking profile</p>
          <form onSubmit={handleSubmit} className='mx-[10px]'>
          <label className='text-[#7F7F7F] pl-[10px] flex justify-start items-center'>
            <LockClosedIcon className="h-6 w-6 pr-[7px]" onClick={togglePasswordLock} />
            <input
              type={passwordVisible ? 'text' : 'password'}
              className='nunito'
              placeholder='Password'
              value={password}
              onChange={(e) => !isLocked && setPassword(e.target.value)}
              required
              disabled={isLocked}
            />
            <EyeIcon className="h-6 w-6 pr-[7px]" onClick={togglePasswordVisibility} />
          </label>
            <div className="SignupBtn">
            <button type="submit" className='bottons flex justify-center bg-[#5586FF] text-[#fff] poppins font-[600] text-[16px] lg:text-[18px] leading-[27px]'>
              Register 
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

export default GetstartedPage;
