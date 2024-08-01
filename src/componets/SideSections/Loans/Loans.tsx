"use client"
import React from 'react'
import { Box, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Loading from "../../Loading/Loadingscreen";
 import SidebarWithHeader from './Sidebar';
import { LoansContents } from './LoanContents';
import { LoanMain } from './LoanMain';
   
export const LoansPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading delay (e.g., fetching data)
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // Adjust the delay as needed
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
        <>
          {loading ? (
            <Loading />
          ) : (
            <Box>
              <SidebarWithHeader />
              <Box className="bg-[#F7F7F7] h-[150vh]">
                
                  <LoanMain/>
                
              </Box>
            </Box>
          )}
        </>
      );
}
