// src/components/Sidebar.tsx
"use client" 
import { Box, VStack, Link, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import {
  FaHome,
  FaShieldAlt,
  FaCreditCard,
  FaUserFriends,
  FaExchangeAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { BiMoney } from "react-icons/bi";
import Image from "next/image";
import logo from "../../../public/assest/9MileLogo.svg"
import sec from "@/../public/assest/9 Milesidebar.svg"


const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="">
      <Box
     
     position="fixed"
     top={0}
     className=" bg-[#fff]
     w-[228.42px]
     h-[832px] pl-[30px] pt-[120px]"
   >
     <div className=" absolute  top-[30px]">
       <Image  
         src={logo}
         width={100}
         height={20} alt={""}      />
     </div>
    
     
     <VStack spacing={20} align="end">
       {[
         { name: "Home", path: "/dashboard", icon: FaHome },
         { name: "Guarantees", path: "/dashboard/guarantees", icon: FaShieldAlt },
         { name: "Loans", path: "/dashboard/loans", icon: BiMoney },
         { name: "Cards", path: "/dashboard/cards", icon: FaCreditCard },
         { name: "Beneficiaries", path: "/dashboard/beneficiaries", icon: FaUserFriends },
         { name: "Transactions", path: "/dashboard/transactions", icon: FaExchangeAlt },
         { name: "Profile Settings", path: "/dashboard/profile-settings", icon: FaCog },
         { name: "Logout", path: "/logout", icon: FaSignOutAlt },
       ].map((item) => (
         <Link
           key={item.name}
           onClick={() => router.push(item.path)}
           style={{ textDecoration: "none" }}
           className="cursor-pointer"
           w="100%"
         >
           <Flex
             py={2}
             px={3}
             borderRadius="md"
             _hover={{ bg: "gray.700" }}
             w="100%"
             align="center"
           >
             <item.icon />
             <Text className="text-[#000]" ml={3}>{item.name}</Text>
           </Flex>
         </Link>
       ))}
     </VStack>
     
   </Box>
   <div className=" fixed left-0 bottom-[0px]">
       <Image  
         src={sec}
         width={100}
         className="w-[218.14px] h-[200.51px] "
         height={100} alt={""}      />
     </div>
    </div>
  );
};

export default Sidebar;
