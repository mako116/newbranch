'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import phone from "../../../../public/assest/iPhonebanner.svg"
import first from "@/../public/assest/first.svg"
import sec from "@/../public/assest/second.svg"
import { EyeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/solid';
import { Loginnavbar } from '@/componets/AuthScreens/AuthNavbar/Loginpage';
import Image from 'next/image';
 
const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
      localStorage.setItem('authenticated', 'true');
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordLock = () => {
    setIsLocked(!isLocked);
  };

  const handleRegisterClick = () => {
    router.push('/signup');
  };

  return (
    <>
    <div className="bg-[#F4F4F4] logins ">
      {/* navbar */}
      <Loginnavbar />
      <div className="mt-[50px] subLogins">
        <h1 className='login_head'>Welcome to 9 Mileon</h1>
        <p className='text-[#000000] login_p'>
          Sign in with your Internet Banking details or 9 Mileon login details.
          Not registered on Internet Banking or 9 Mileon?<br />
          Click on register to get started
        </p>
        
        {/* form  */}
        <form onSubmit={handleSubmit} className='mt-[20px] flex flex-col'>
          {/* username */}
          <label className='mb-[20px] text-[#7F7F7F] pl-[10px] flex justify-start items-center'>
            {/* usericon */}
            <UserIcon className="text-[#7F7F7F] h-6 w-6 pr-[7px]" />
            <input
              className='nunito'
              type="text"
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
         {/* password */}
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
          <Link className='forgotpassndusertext text-[#5586FF] nunito font-[600] text-[12px] leading-[16.37px] pt-[10px] lg:pt-[20px]' href="/forgottenemail">
            <span>Forgot Username or Password?</span>
          </Link>
          <div className="flex flex-col  mt-[20px] gap-[20px]">
            <button type="submit" className='bottons bg-[#5586FF] text-[#fff] poppins font-[600] text-[16px] lg:text-[18px] leading-[27px]'>Sign in</button>
            <button type="button" className='bottons text-[#5586FF] poppins font-[600] text-[16px] lg:text-[18px] leading-[27px] boxshadowblue' onClick={handleRegisterClick}>Register</button>
          </div>
        </form>
        
        <div className="">
        <p className='flex items-center text-center donthavecreatacct nunito font-[600] text-[12px] leading-[16.37px] bg-[#fff] text-[#000] '>
          Having any problem? <a href="/" className='text-[#5586FF] underline'>Chat with us</a></p>
        </div>
        
      </div>
      <div className="hides">
      <div className="absolute bottom-0 right-0">
         <Image
        width={100}
        height={100}
        src={first}
        className='w-[500px] lg:w-[100%] h-[100%]  '
        alt=''
        />
     </div>
     <div className="">
     <div className="absolute bottom-0 right-0 ">
         <Image
        width={100}
        height={50}
        src={sec}
        className='w-[500px] lg:w-[100%]'
        alt=''
        />
     </div>
     <div className="absolute bottom-0 right-0 ">
         <Image
        width={100}
        height={50}
        src={phone}
        className='w-[500px] lg:w-[100%] '
        alt=''
        />
     </div>
     </div>
      </div>
      
    </div>
    
    </>
    
  );
};

export default LoginPage;
