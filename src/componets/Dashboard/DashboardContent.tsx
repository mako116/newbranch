// src/components/DashboardContent.tsx
"use client"
import AccountInfoCard from "../AccountSwitch/AccountSwitch";
import RecentTransfers from "../ReactTabs/RecentTransfer";

const DashboardContent = () => {
  return (
    <div className=" ml-80">
      <div className=" flex space-x-5 w-full " >
        <AccountInfoCard />
        <RecentTransfers />
      </div>
    </div>
  );
};

export default DashboardContent;
