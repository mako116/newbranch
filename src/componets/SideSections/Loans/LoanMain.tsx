import React, { useState } from 'react';
import { Avatar, Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Text, VStack, useTheme } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';
 import { RequestLoan } from './RequestLoan';
import { LoansContents } from './LoanContents';
import SendLoans from './SendLoan';
  
export const LoanMain = () => {
  const theme = useTheme();

  const [selectedOption, setSelectedOption] = useState('Account');

  const renderContent = () => {
    switch (selectedOption) {
      case 'Transactions':
        return <LoansContents />;
      case 'SendLoan':
        return <SendLoans />;
      case 'RequestLoan':
        return <RequestLoan/>;
      default:
        return <LoansContents />;
    }
  };
 
  return (
    <Box className="poppins" w="full" p={4}>
      <Box className="guaranteecontents">
        <Link href="/">
        <Flex align="center" cursor="pointer" fontWeight="600" fontSize="14px" color="#5586FF" mb={4}>
          <IoIosArrowBack />
          <Text ml={2}>Back</Text>
        </Flex>
        </Link>
      
        <Box   className='bg-[#fff] pt-[20px] h-full ml-[40px] mr-[40px]'
          >
             <div className=''>
        <div className="flex justify-start items-start h-[24px] bg-[#fff] rounded-[10px] pr-[20px] pl-[20px] w-full">
          
          <button
            onClick={() => setSelectedOption('Transactions')}
            className={`w-[207px] h-[33px] rounded-[30px] font-bold text-[12px] md:text-[15px] leading-[12px] tracking-[1px] text-[#000000] ${selectedOption === 'Account' ? 'bg-[#F7F6FE]' : 'bg-[#fff]'}`}
          >
            Transactions
          </button>
          <button
            onClick={() => setSelectedOption('SendLoan')}
            className={`w-[207px] h-[33px] rounded-[30px] font-bold text-[12px] md:text-[15px] leading-[12px] tracking-[1px] text-[#000000]  ${selectedOption === 'Transfers' ? 'bg-[#F7F6FE]' : 'bg-[#fff]'}`}
          >
            Send Loan
          </button>
          <button
            // onClick={() => setSelectedOption('RequestLoan')}
            className={`w-[207px] h-[33px] rounded-[30px] font-bold text-[12px] md:text-[15px] leading-[12px] tracking-[1px] text-[#000000]  ${selectedOption === 'Bill Payments' ? 'bg-[#F7F6FE]' : 'bg-[#fff]'}`}
          >
           Request Loan
          </button>
       
        </div>
        <div className="p-[20px]">
          {renderContent()}
        </div>
      </div>
          </Box>
       </Box>
    </Box>
  );
};
