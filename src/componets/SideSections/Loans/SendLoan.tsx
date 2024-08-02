"use client";
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Image from 'next/image';

// icons
import BillIcon from '@/../public/assest/icons/billIcon.svg';
import TransferIcon from '@/../public/assest/icons/transferIcon.svg';
import { Box, Button } from '@chakra-ui/react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

type LoanItem = {
  name: string;
  paragraph: string;
};

const loanItems: LoanItem[] = [
  {
    name: "Payday loan",
    paragraph: "5% Per month. Short term loan from 20,000 to 100,00",
  },
  {
    name: "Cooperative loan",
    paragraph: "10% per annum. Loan service to finance rent, school fees and salary advance",
  },
  {
    name: "SME loan",
    paragraph: "20% per annum. Loan service to finance start of business.",
  },
  {
    name: "Consumer loan",
    paragraph: "17% per annum. Finance personal issues like car, house & furniture.",
  },
  {
    name: "Credit loan",
    paragraph: "20% per annum. Gain access to funds for small businesses.",
  },
  {
    name: "9Mile Credit Loan",
    paragraph: "10% per annum. Gain access to funds for small businesses.",
  },
  {
    name: "Agribusiness Loans",
    paragraph: "20% per annum. Loan service to finance agricultural based startup",
  },
];

const SendLoans: React.FC = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const togglePasswordVisibility = () => {
    setShowBalance(!showBalance);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Box
    maxH="600px"
    overflowY="auto"
    p={4}
    pt="10px"
    borderRadius="20px"
    css={{
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      '&': {
        '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
        'scrollbar-width': 'none',  /* Firefox */
      },
    }}>

   
    <div className='flex flex-col'>
      <div className="">
        <h2 className='text-[#000000] mb-5 text-[12px] font-bold leading-[18px] poppins'>Choose a Loan Type</h2>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        {loanItems.map((item, index) => (
          <div key={index} className="w-[177px] h-[202px] rounded-[15px] gap-[31px] bg-[#DCE6FF] rounded-2xl text-white  flex-wrap">
            <div className='flex flex-col md:items-start items-center poppins pt-[20px] pr-[25px] pb-[20px] pl-[20px]'>
              <div className="pb-[30px]">
              <input
                type="checkbox"
                className="appearance-none border-2 border-[#5586FF] w-4 h-4 rounded-[30px] mr-2 cursor-pointer"
              />
              </div>
              <div className='text-[#000]'>
                <h3 className=" pb-[20px] leading-[21px] font-[600]">{item.name}</h3>
                <p className='text-[400] text-[11px]'>{item.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/transferloan">
      
      
      <Box className=' w-full flex md:justify-end justify-center items-end pt-[30px]' >
      <Button className="buttons" colorScheme='white' bg="#5586FF" borderRadius="10px">
        <ArrowRightIcon className="ml-2 h-5 w-5 text-[#fff]"/>
        Proceed
      </Button>
      </Box>
      </Link>
    </div>
    </Box>
  );
};

export default SendLoans;
