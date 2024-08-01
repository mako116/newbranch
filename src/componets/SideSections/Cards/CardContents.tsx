import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  useTheme
} from '@chakra-ui/react';
import Slider from 'react-slick';
import { IoIosArrowBack } from 'react-icons/io';
import { FiChevronDown, FiChevronUp, FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import { PiCards } from 'react-icons/pi';
import string1 from "public/assest/cardside/1.svg";
import string2 from "public/assest/cardside/2.svg";
import string3 from "public/assest/cardside/3.svg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const CardContents = () => {
  const theme = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 628,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Box className="poppins" w="full" p={{ base: 2, md: 4 }}>
      <Box className="guaranteecontents">
        <Link href="/">
          <Flex align="center" cursor="pointer" fontWeight="600" fontSize={{ base: "12px", md: "14px" }} color="#5586FF" mb={4}>
            <IoIosArrowBack />
            <Text ml={2}>Back</Text>
          </Flex>
        </Link>
        <Heading fontSize={{ base: "14px", md: "16px" }} fontWeight="600" mb={4} color="#000">
          Debit Card
        </Heading>
        <Box>
          <Box className='bg-[#fff] p-5'>
            <Box>
              <div className="relative mt-2 poppins">
                <div
                  className="flex justify-between items-center bg-[#ECF2FF] rounded-full px-3 py-2 cursor-pointer w-full md:w-[500px]"
                  onClick={toggleDropdown}
                >
                  <span className='font-[400] text-[9px] leading-[13px] tracking-[0.1px] text-[#000]'>
                    Source account <br /> 
                    <span className='font-[600]'> BASIC SAVING - 7052581498 (INDIVIDUAL)</span>
                  </span>
                  {isDropdownOpen ? <FiChevronUp className="ml-2" /> : <FiChevronDown className="ml-2" />}
                </div>
                {isDropdownOpen && (
                  <div className="absolute left-0 md:left-[-50px] mt-2 bg-[#FFFFFF] w-full md:w-[314px] h-auto rounded-[10px] p-2 z-10">
                    <div className="p-4 bg-[#E5ECFF] rounded-[20px] mb-2 h-[73px]">
                      <h4 className="text-[#3C3C3C] font-[700] text-[10px] lg:text-[12px] leading-[18px]">Savings</h4>
                      <span className="text-[#707070] font-[400] text-[10px] lg:text-[12px] leading-[18px]">₦250,000</span>
                    </div>
                    <div className="p-4 bg-[#E5ECFF] rounded-[20px] mb-2 h-[73px]">
                      <h4 className="text-[#3C3C3C] font-[700] text-[10px] lg:text-[12px] leading-[18px]">Savings</h4>
                      <span className="text-[#707070] font-[400] text-[10px] lg:text-[12px] leading-[18px]">₦250,000</span>
                    </div>
                    <div className="p-4 bg-[#E5ECFF] rounded-[20px] mb-2 h-[73px]">
                      <h4 className="text-[#3C3C3C] font-[700] text-[10px] lg:text-[12px] leading-[18px]">Savings</h4>
                      <span className="text-[#707070] font-[400] text-[10px] lg:text-[12px] leading-[18px]">₦250,000</span>
                    </div>
                  </div>
                )}
              </div>
            </Box>
            <Box mt={4} className='flex gap-[30px] flex-col'>
              <Slider {...sliderSettings}>
                {[...Array(4)].map((_, index) => (
                 <Box key={index}>
                   <Flex className='mx-[10px] lg:mx-[20px]'>
                     <Card className='cardcolor' color="white" borderRadius="lg">
                      <CardHeader>
                        <Text fontSize="sm">Subscriptions</Text>
                      </CardHeader>
                      <CardBody className='max-w-[100%] lg:max-w-[250px] mt-[-25px]'>
                        <Flex justifyContent="space-between">
                          <h3>pin</h3>
                          <PiCards />
                        </Flex>
                        <Text className='nunito font-[700] text-[17px] lg:text-[26px] leading-[35.46px]'>**** **** **** 1234</Text>
                        <h3 className='font-[700] text-[10px] lg:text-[12px] leading-[19.1px] nunito text-[#d7d7d7]'>John Doe</h3>
                      </CardBody>
                      <CardFooter className='mt-[-30px]'>
                        <Flex justifyContent="space-between" width="100%" className='relative'>
                          <Box>
                            <Text className='nunito font-[400] text-[#D7D7D7] text-[10px] leading-[13.64px]'>Debit</Text>
                            <Text className='nunito font-[700] text-[14px] leading-[19.64px]'>₦251,10,0.03</Text>
                          </Box>
                          <Box>
                            <Text className='nunito font-[400] text-[#D7D7D7] text-[10px] leading-[13.64px]'>Expiry</Text>
                            <Text className='nunito font-[700] text-[14px] leading-[19.64px]'>11/25</Text>
                          </Box>
                          <Box>
                            <Text className='nunito font-[400] text-[#D7D7D7] text-[10px] leading-[13.64px]'>CCV</Text>
                            <Text className='nunito font-[700] text-[14px] leading-[19.64px]'>098</Text>
                          </Box>
                        </Flex>
                      </CardFooter>
                      <div className="absolute top-0 right-0">
                        <img src={string1.src} alt="" />
                      </div>
                      <div className="absolute top-0 right-0">
                        <img src={string2.src} alt="" />
                      </div>
                      <div className="absolute top-0 right-0">
                        <img src={string3.src} alt="" />
                      </div>
                    </Card>
                   </Flex>
                 </Box>
                ))}
              </Slider>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};