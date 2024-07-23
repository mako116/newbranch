// src/pages/dashboard/index.tsx
"use client"
import { Box, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import DashboardContent from "./DashboardContent";
import Navbar from "../Navbar/Navbar";
import Sidebar from "./sidebar";
import SidebarWithHeader from "./sidebar";
import Loading from "../Loading/Loadingscreen";
 
const Dashboard = () => {
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
          <Box className="bg-[#F7F7F7] h-screen ">
            <DashboardContent />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Dashboard;
