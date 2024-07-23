import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';

// icons
import BillIcon from '@/../public/assest/icons/billIcon.svg'
import TransferIcon from '@/../public/assest/icons/transferIcon.svg'
const AccountInfoCard = () => {
  const [showBalance, setShowBalance] = useState(false);

  const togglePasswordVisibility = () => {
    setShowBalance(!showBalance);
  };

  return (
    <div className="w-64 p-4 bg-blue-500 rounded-2xl text-white">
      <div className="text-lg font-semibold">Individual</div>
      <div className="mt-1">Acct No: 7052581498</div>

      <div className="relative mt-4">
        <div className="flex justify-between items-center bg-blue-400 rounded-full px-3 py-2">
          <span>Benefits Balance</span>
          <FiChevronDown className="ml-2" />
        </div>
      </div>

      <div className="relative mt-4">
        <input
          type={showBalance ? 'text' : 'password'}
          value="********"
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
          <Image src={BillIcon} alt="Transfer" className="h-6 w-6" />
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
  );
};

export default AccountInfoCard;