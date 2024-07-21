'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
 import { EnvelopeIcon } from '@heroicons/react/24/outline';
import {  UserIcon } from '@heroicons/react/24/solid';
import { FaArrowRight } from 'react-icons/fa';
import sec from "@/../public/assest/9Milebanner.svg"
import Image from 'next/image';
import { Signupnavbar } from '@/componets/AuthScreens/AuthNavbar/SignupPage';

const countryCodes: { [key: string]: string } = {
  NG: '+234',
  US: '+1',
  GB: '+44',
};

const SignupPage = () => {
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('NG');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/Addres');
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setPhone(input);
  };

  return (
    <>
      <div className="bg-[#F4F4F4] logins">
        <Signupnavbar />
        <div className="subSignup  poppins">
          <span className='font-[500] text-[12px] leading-[18px] text-[#7F7F7F] mb-[20px] h-[18px]'>Step 1 of 5</span>
          <h1 className='font-[500] text-[24px] leading-[36px] text-center md:text-start text-[#00000] mb-[10px]'>Welcome, Let’s get you started</h1>
          <p className='font-[500] lg:px-[0px] px-[14px] text-center md:text-start text-[12px] leading-[18px] mb-[40px]'>Provide the information below to create your access internet banking profile</p>
          <form onSubmit={handleSubmit} className='mx-[10px]'>
            <label className='mb-[20px] text-[#7F7F7F] pl-[10px] flex justify-start items-center'>
              <UserIcon className="text-[#7F7F7F] h-6 w-6 pr-[7px]" />
              <input
                className='nunito'
                type="text"
                placeholder='First Name'
                value={Firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </label>
            <label className='mb-[20px] text-[#7F7F7F] pl-[10px] flex justify-start items-center'>
              <UserIcon className="text-[#7F7F7F] h-6 w-6 pr-[7px]" />
              <input
                className='nunito'
                type="text"
                placeholder='Last Name'
                value={Lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </label>
           
            <label className='mb-[20px]  text-[#7F7F7F] pl-[10px] flex justify-start items-center'>
            <select
              className='nunito bg-[#fff]  text-[19px]'
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="NG">🇳🇬</option>
              <option value="US">🇺🇸</option>
              <option value="GB">🇬🇧</option>
            </select>
            <div className="inputed-wrapper border-l pl-[5px]" data-placeholder="phone number">
              <input
                className='nunito inputed'
                type="text"
                placeholder={countryCodes[selectedCountry]}
                value={Phone}
                onChange={handleNumberInput}
                required
              />
            </div>
          </label>
            <label className='mb-[20px] text-[#7F7F7F] pl-[10px] flex justify-start items-center'>
            <EnvelopeIcon className="text-[#7F7F7F] h-7 w-7 pr-[7px]" />
              <input
                className='nunito font-[400]'
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
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
        src={sec}
        className='w-[100%] '
        alt=''
        />
     </div>
     </div>
      </div>
    </>
  );
};

export default SignupPage;
