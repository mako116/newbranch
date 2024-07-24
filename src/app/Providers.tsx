// app/providers.tsx
<<<<<<< HEAD
'use client'

import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>
=======
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
>>>>>>> 8ab1d59881b5f6684313698e17cd559c230069b1
}