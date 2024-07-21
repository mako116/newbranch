// src/components/Loading.tsx
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
      <div className="text-center">
        <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full h-12 w-12 mx-auto"></div>
        <p className="mt-4 text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
