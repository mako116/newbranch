"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Signupnavbar } from '../AuthNavbar/SignupPage';
import { FaArrowRight } from 'react-icons/fa';

const OTPPage: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const router = useRouter();

 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to next input
      if (value && index < otp.length - 1) {
        (e.target.nextSibling as HTMLInputElement)?.focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   router.push('/password');
     
  };

  return (
    <div className="bg-[#F4F4F4] logins">
      <Signupnavbar />
      <div className="subSignup poppins">
        <span className='font-[500] text-[12px] leading-[18px] text-[#7F7F7F] mb-[20px] h-[18px]'>Step 4 of 5</span>
        <h1 className='font-[500] text-[24px] leading-[36px] text-center md:text-start text-[#000000] mb-[10px]'>Verify your account</h1>
        <p className='font-[500] lg:px-[0px] px-[14px] text-center md:text-start text-[12px] leading-[18px] mb-[40px]'>Enter the OTP sent to your phone/email to complete the verification process</p>
        <form onSubmit={handleSubmit} className='mx-[10px]'>
          <div className="otpInputs flex justify-center space-x-[10px] mb-[20px]">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-[55px] md:w-[65px] h-[59px] md:h-[73px] rounded-[10px] text-center text-[24px] border-[0.5px] border-[#5586FF] outline-none"
                value={digit}
                onChange={(e) => handleChange(e, index)}
              />
            ))}
          </div>
          <div className="SignupBtn">
            <button type="submit" className='bottons flex justify-center bg-[#5586FF] text-[#fff] poppins font-[600] text-[16px] lg:text-[18px] leading-[27px]'>
              Continue
              <FaArrowRight className="text-[#fff] font-[700] mt-[6px]" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPPage;
