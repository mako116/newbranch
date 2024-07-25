'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import phone from "../../../../public/assest/iPhonebanner.svg"
import { EyeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/solid';
import { Loginnavbar } from '@/componets/AuthScreens/AuthNavbar/Loginpage';
import Image from 'next/image';
import { TLogin } from '../../../utils/types/auth';
import { useAuth } from '../../../utils/hooks/useAuth';
 
const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [isLocked, setIsLocked] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (values: TLogin) => {
    try {
      const response = await login(values);
      if (response?.success) {
        router.push("/");
      } else {
        setError(response?.message || 'An error occurred');
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin({ email: username, password });
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
    <div className="logins">
      <div className='grid grid-cols-2 gap-5 justify-center'>
        <div>
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
        </div>
        <div className="">
          <Image
          width={100}
          height={50}
          src={phone}
          className='h-[750px] w-[750px]'
          alt='9-mileon mobile'
          />
        </div>
      </div>
    </div>
    
    </>
    
  );
};

export default LoginPage;
