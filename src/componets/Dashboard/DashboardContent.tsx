// src/components/DashboardContent.tsx
"use client"
import AccountInfoCard from "../AccountSwitch/AccountSwitch";
import BillsOptions from "../BillsOptions/BillsOptions";
 import RecentTransfers from "../ReactTabs/RecentTransfer";

const DashboardContent = () => {
  return (
    <div className="">
      <div className="dashboardcontents flex-col lg:flex-row lg:flex space-x-5 w-full gap-[20px] md:gap-[40px]" >
        <AccountInfoCard />
        <RecentTransfers />
      </div>
      <div className="dashboardmain">
        <BillsOptions/>
      </div>
    </div>
  );
};

export default DashboardContent;
