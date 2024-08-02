import React, { useState } from 'react';
import { AccountContent } from '../BillSelections/AccountContents';
import { TransfersContent } from '../BillSelections/TransfersContent';
import { BillPaymentsContent } from '../BillSelections/BillPaymentsContent';
import { ChequesCardsContent } from '../BillSelections/ChequesCardsContent';

// Sample content for each section
// const AccountContent = () => <div><AccountCont </div>;
// const TransfersContent = () => <div>Transfers Content</div>;
// const BillPaymentsContent = () => <div>Bill Payments Content</div>;
// const ChequesCardsContent = () => <div>Cheques & Cards Content</div>;

const BillsOptions = () => {
  const [selectedOption, setSelectedOption] = useState('Account');

  const renderContent = () => {
    switch (selectedOption) {
      case 'Account':
        return <AccountContent />;
      case 'Transfers':
        return <TransfersContent />;
      case 'Bill Payments':
        return <BillPaymentsContent />;
      case 'Cheques & Cards':
        return <ChequesCardsContent />;
      default:
        return null;
    }
  };

  return (
    <div className=''>
      <div className="flex justify-center items-center h-[54px] bg-[#fff] rounded-[10px] pr-[20px] pl-[20px]">
        
        <button
          onClick={() => setSelectedOption('Account')}
          className={`w-[207px] h-[33px] rounded-[30px] font-bold text-[15px] leading-[12px] tracking-[1px] text-[#000000] ${selectedOption === 'Account' ? 'bg-[#F7F6FE]' : 'bg-[#fff]'}`}
        >
          Account
        </button>
        <button
          onClick={() => setSelectedOption('Transfers')}
          className={`w-[207px] h-[33px] rounded-[30px] font-bold text-[15px] leading-[12px] tracking-[1px] text-[#000000]  ${selectedOption === 'Transfers' ? 'bg-[#F7F6FE]' : 'bg-[#fff]'}`}
        >
          Transfers
        </button>
        <button
          onClick={() => setSelectedOption('Bill Payments')}
          className={`w-[207px] h-[33px] rounded-[30px] font-bold text-[15px] leading-[12px] tracking-[1px] text-[#000000]  ${selectedOption === 'Bill Payments' ? 'bg-[#F7F6FE]' : 'bg-[#fff]'}`}
        >
          Bill Payments
        </button>
        <button
          onClick={() => setSelectedOption('Cheques & Cards')}
          className={`w-[207px] h-[33px] rounded-[30px] font-bold text-[15px] leading-[12px] tracking-[1px] text-[#000000]  ${selectedOption === 'Cheques & Cards' ? 'bg-[#F7F6FE]' : 'bg-[#fff]'}`}
        >
          Cheques & Cards
        </button>
      </div>
      <div className="BillsOptions">
        {renderContent()}
      </div>
    </div>
  );
};

export default BillsOptions;
