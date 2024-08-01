import React from 'react';

const RecentTransfers = () => {
  return (
    <div className="recentTransfers  mx-auto p-5 rounded-[30px] bg-[#fff]">
      <h2 className="text-lg font-semibold mb-4">Most Recent Transfers</h2>
      <div className="overflow-hidden relative w-full bg-blue-100 p-6 rounded-[40px]">
      <div className="whitespace-nowrap animate-scroll flex space-x-4  ">
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="inline-flex flex-col items-center p-4 bg-white rounded-lg shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
              <span className="text-gray-500 font-semibold">D A</span>
            </div>
            <span className="mt-2 text-sm font-medium text-gray-700">David Akinola</span>
          </div>
        ))}
        {/* Duplicate items for continuous scrolling effect */}
        {[1, 2, 3].map((item, index) => (
          <div key={index + 5} className="inline-flex flex-col items-center p-4 bg-white rounded-lg shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
              <span className="text-gray-500 font-semibold">D A</span>
            </div>
            <span className="mt-2 text-sm font-medium text-gray-700">David Akinola</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default RecentTransfers;
