import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import logo from "../../../..//public/assest/9MileLogo.svg"
import UKFlag from "../../../../public/assest/flags/circle-flags_uk.svg"
import NGFlag from "../../../../public/assest/flags/nigeria.svg"
import EEFlag from "../../../../public/assest/flags/emojione_flag-for-estonia.svg"
export const Loginnavbar:React.FC = () => {
   const [selectedCountry, setSelectedCountry] = useState<string>('');
  const countries = [
    { code: 'GB', name: 'United Kingdom', flag: UKFlag, emoji: '🇬🇧' },
    { code: 'NG', name: 'Nigeria', flag: NGFlag, emoji: '🇳🇬' },
    { code: 'EE', name: 'Estonia', flag: EEFlag, emoji: '🇪🇪' },
    // Add more countries as needed
  ];

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
};
  return (
    <>
    <div className="">
        <div className="py-[20px] lg:py-[28px] px-[10px] lg:px-[20px] flex justify-start gap-[170px] lg:gap-[400px] ">
            <div className="logo">
                <Image 
                width={100}
                height={20}
                src={logo}
                alt='9MileLogo'
                />
            </div>
            <div className='select_tog'>
           <div className='selecting'>
              <select className='p-[2px]  inter font-[500] text-[22px] leading-[56px] text-[#00000]' id="country" value={selectedCountry} onChange={handleCountryChange}>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    <div className=''> {country.emoji}</div>
                  </option>
                ))}
              </select>
            </div>
            {/* <div className="login_navOption">
              {selectedCountry && (
                <img src={countries.find(c => c.code === selectedCountry).flag} alt="Flag" />
              )}
            </div> */}
           </div>
             
        </div>
    </div>
    </>
  )
}
