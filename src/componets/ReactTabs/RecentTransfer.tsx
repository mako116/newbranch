import React from 'react';

const RecentTransfers = () => {
  return (
    <div className="max-w-lg mx-auto p-4 rounded-lg bg-gray-50">
      <h2 className="text-lg font-semibold mb-4">Most Recent Transfers</h2>
      <div className="flex space-x-4 bg-blue-100 p-6 rounded-lg">
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
            <span className="text-gray-500 font-semibold">D A</span>
          </div>
          <span className="mt-2 text-sm font-medium text-gray-700">David Akinola</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
            <span className="text-gray-500 font-semibold">D A</span>
          </div>
          <span className="mt-2 text-sm font-medium text-gray-700">David Akinola</span>
        </div>
      </div>
    </div>
  );
};

export default RecentTransfers;
