"use client"
import SidebarWithHeader from "../Sidebar/Sidebar";

import AccountAndRecents from "../BalanceSection/AccountAndRecents";

export const Homesection = () => {
  return (
    <main className="bg-[#F7F7F7] h-screen">
      <SidebarWithHeader />
      <AccountAndRecents />
    </main>
  );
};
