"use client"
import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Input, Select, Switch, Text } from '@chakra-ui/react';
 import Loading from '@/componets/Loading/Loadingscreen';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import SidebarWithHeader from './Sidebar';

export const Transferloan = () => {
  const [loading, setLoading] = useState(true);
  const [isInputEnabled, setIsInputEnabled] = useState(false);

  useEffect(() => {
    // Simulate loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setIsInputEnabled(!isInputEnabled);
  };

  const [showBalance, setShowBalance] = useState(false);
  const togglePasswordVisibility = () => {
    setShowBalance(!showBalance);
  };


  return (
    <>
      {loading ? (
        <Loading />
      ) : ( 
        <Box>
          <SidebarWithHeader />
          <Box className="bg-[#F7F7F7] h-screen pt-[50px]">
          
            <Box className='formmain bg-[#fff]'>
            <Box>
            <Link href="/">
          <Flex align="center" cursor="pointer" fontWeight="600" fontSize={{ base: "12px", md: "14px" }} color="#5586FF" mb={4}>
            <IoIosArrowBack />
            <Text ml={2}>Back</Text>
          </Flex>
        </Link>
          </Box>
          <Box  display="flex" width="100%"  justifyContent="end">
          <div className="relative mt-2 border-[#C8C8C8] mr-[20px] border rounded-[10px] pl-[10px]">
          <input
            type={showBalance ? 'text' : 'password'}
            value="₦********"
            className="text-[12px] leading-[15px]  bg-transparent border-none text-[#5586FF]   focus:outline-none"
            readOnly 
          />
          <div
            className="gap-[8px] border-[#99B6FF4D] bg-[#99B6FF4D] text-[#000] border rounded-[20px]  absolute inset-y-0 right-0 flex items-center px-[5px]  cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showBalance ? <FaEyeSlash className='text-[#5586FF] font-bold ' /> : <FaEye  className='text-[#5586FF] font-bold text-[12px] leading-[15px]' />}
            <p className='text-[8px]  poppins items-center text-[#000] font-bold'>show Balance</p>
          </div>
          </div>
          </Box>
              <Box w="100%" p={5} borderRadius="lg">
                <form className='w-full'>
                  <FormControl id="loanType" mb={4} color="#979797">
                    <Select h="50px"  backgroundColor="#F0F0F0" placeholder="Select Account">
                      <option value="personal">Personal Loan</option>
                      <option value="home">Home Loan</option>
                    </Select>
                  </FormControl>
                  <FormControl id="name" mb={4} color="#979797">
                    <Input h="50px" backgroundColor="#F0F0F0" type="text" placeholder="Amount number" />
                  </FormControl>
                  <FormControl id="loanDuration" mb={4} color="#979797">
                    <Select h="50px" backgroundColor="#F0F0F0" placeholder="Select Duration">
                      <option value="1year">1 Year</option>
                      <option value="3years">3 Years</option>
                      <option value="5years">5 Years</option>
                    </Select>
                  </FormControl>
                  <FormControl id="email" mb={4} color="#979797">
                    <Input type="email" h="50px" backgroundColor="#F0F0F0" placeholder="Enter your email" />
                  </FormControl>

                  <FormControl color="#979797" display="flex" mb="20px" backgroundColor="#F0F0F0"  alignItems="center" h="50px"  justifyContent="space-between" >
      <FormLabel display="flex" color="#979797" backgroundColor="#F0F0F0"  alignItems="center" pl="20px" width="100%" height="100%"   htmlFor="toggle-input" mb="0"  fontSize="sm" mr={2}>
        Waive Interest
      </FormLabel>
      <Box  alignItems="center" >
        <Switch id="toggle-input"  backgroundColor="#F0F0F0"  display="flex" width="100%" height="100%" justifyContent="end" />
      </Box>
    </FormControl>

                  
                  
                  <Button color="white" _hover="none" h="50px" backgroundColor="#5586FF" type="submit" width="full">Proceed</Button>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Transferloan;
