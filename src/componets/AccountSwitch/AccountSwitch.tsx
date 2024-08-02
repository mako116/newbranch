"use client"
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Image from 'next/image';

// icons
import BillIcon from '@/../public/assest/icons/billIcon.svg'
import TransferIcon from '@/../public/assest/icons/transferIcon.svg'

const AccountInfoCard = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const togglePasswordVisibility = () => {
    setShowBalance(!showBalance);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='flex flex-col'>
      <div className="">
        <h2 className='text-[#000000] mb-5 text-[12px] font-bold leading-[18px] poppins'>Guarantor Power</h2>
      </div>
      <div className="w-64 p-4 bg-blue-500 rounded-2xl text-white relative">
        <div className="text-lg font-semibold">Individual</div>
        <div className="mt-1">Acct No: 7052581498</div>

        <div className="relative mt-2 poppins">
          <div 
            className="flex justify-between items-center bg-blue-400 rounded-full px-3 py-2 cursor-pointer" 
            onClick={toggleDropdown}
          >
            <span>Benefits Balance</span>
            {isDropdownOpen ? <FiChevronUp className="ml-2" /> : <FiChevronDown className="ml-2" />}
          </div>
          {isDropdownOpen && (
            <div className="absolute left-[-50px] mt-2  bg-[#FFFFFF] w-[314px] h-auto rounded-[10px] p-2 z-10">
              <div className="p-4 bg-[#E5ECFF] rounded-[20px] mb-2 h-[73px]">
                <h4 className='text-[#3C3C3C] font-[700] text-[12px] leading-[18px]'>Savings</h4>
                <span className=' text-[#707070] font-[400] text-[12px] leading-[18px]'>₦250,000</span>
              </div>
              <div className="p-4 bg-[#E5ECFF] rounded-[20px] mb-2 h-[73px]">
                <h4 className='text-[#3C3C3C] font-[700] text-[12px] leading-[18px]'>Savings</h4>
                <span className=' text-[#707070] font-[400] text-[12px] leading-[18px]'>₦250,000</span>
              </div>
              <div className="p-4 bg-[#E5ECFF] rounded-[20px] mb-2 h-[73px]">
                <h4 className='text-[#3C3C3C] font-[700] text-[12px] leading-[18px]'>Savings</h4>
                <span className=' text-[#707070] font-[400] text-[12px] leading-[18px]'>₦250,000</span>
              </div>
         </div>
          )}
        </div>

        <div className="relative mt-2">
          <input
            type={showBalance ? 'text' : 'password'}
            value="₦********"
            className="w-full bg-transparent border-none text-lg focus:outline-none"
            readOnly
          />
          <div
            className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showBalance ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <div className="flex justify-around mt-6">
          <button className="flex flex-col items-center">
            <div className="bg-white text-blue-500 p-3 rounded-full">
              <Image src={BillIcon} alt="Pay Bills" className="h-6 w-6" />
            </div>
            <span className="mt-2">Pay Bills</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="bg-white text-blue-500 p-3 rounded-full">
              <Image src={TransferIcon} alt="Transfer" className="h-6 w-6" />
            </div>
            <span className="mt-2">Transfer</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfoCard;
