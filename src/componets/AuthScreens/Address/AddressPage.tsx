"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiHome } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { Signupnavbar } from '../AuthNavbar/SignupPage';
import sec from "@/../public/assest/9Milebanner.svg";

const AddressPage: React.FC = () => {
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/Banks');
  };

  return (
    <div className="bg-[#F4F4F4] logins">
      <Signupnavbar />
      <div className="subSignup poppins">
        <span className='font-[500] text-[12px] leading-[18px] text-[#7F7F7F] mb-[20px] h-[18px]'>Step 2 of 5</span>
        <h1 className='font-[500] text-[24px] leading-[36px] text-center md:text-start text-[#000000] mb-[10px]'>Welcome, Let’s get you started</h1>
        <p className='font-[500] lg:px-[0px] px-[14px] text-center md:text-start text-[12px] leading-[18px] mb-[40px]'>Provide the information below to create your access internet banking profile</p>
        <form onSubmit={handleSubmit} className='mx-[10px]'>
          <label className='mb-[20px] text-[#7F7F7F] pl-[10px] flex justify-start items-center'>
            <FiHome className="text-[#7F7F7F] h-6 w-6 pr-[7px]" />
            <input
              className='nunito'
              type="text"
              placeholder='Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          
          <label className='mb-[20px] text-[#7F7F7F] pl-[10px] flex justify-start items-center'>
            <select
              className='nunito bg-[#fff] tracking-[1px] font-[600] text-[12px] w-full'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              <option value="" disabled>Country</option>
              <option value="NG">Nigeria</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
            </select>
          </label>

          <label className='mb-[20px] text-[#7F7F7F] pl-[10px] flex justify-start items-center'>
            <select
              className='nunito bg-[#fff] font-[600] text-[12px] w-full'
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            >
              <option value="" disabled>State</option>
              <option value="Lagos">Lagos</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
            </select>
          </label>

          <label className='mb-[20px] text-[#7F7F7F] pl-[10px] flex justify-start items-center'>
            <select
              className='nunito bg-[#fff] font-[600] text-[12px] w-full'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option value="" disabled>City</option>
              <option value="Ikeja">Ikeja</option>
              <option value="Manhattan">Manhattan</option>
              <option value="Camden">Camden</option>
            </select>
          </label>

          <div className="SignupBtn">
            <button type="submit" className='bottons flex justify-center bg-[#5586FF] text-[#fff] poppins font-[600] text-[16px] lg:text-[18px] leading-[27px]'>
              Continue 
              <FaArrowRight className="text-[#fff] font-[700] mt-[6px]" />
            </button>
          </div>
        </form>
      </div>
      <div className="hides">
        <div className="absolute bottom-0 right-0">
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

export default AddressPage;
