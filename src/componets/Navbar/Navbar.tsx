// src/components/Navbar.tsx
import { Box, Flex, Text, IconButton, Badge } from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import UKFlag from "../../../public/assest/flags/circle-flags_uk.svg"
import NGFlag from "../../../public/assest/flags/nigeria.svg"
import EEFlag from "../../../public/assest/flags/emojione_flag-for-estonia.svg"
import { ChangeEvent, useState } from "react";
const Navbar = () => {
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
     <div className='select_tog'>
           <div className='selecting'>
              <select className='p-[5px]  inter font-[500] text-[22px] leading-[56px] text-[#00000]' id="country" value={selectedCountry} onChange={handleCountryChange}>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    <div className=''> {country.emoji}</div>
                  </option>
                ))}
              </select>
            </div>
            </div>
    </>

     
  );
};

export default Navbar;
