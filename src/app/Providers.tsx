// app/providers.tsx
"use client"

import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../context/AuthContext';
import ServerCookiesProvider from './ServerCookiesProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ServerCookiesProvider>
      <AuthProvider>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </AuthProvider>
    </ServerCookiesProvider>
  );
}