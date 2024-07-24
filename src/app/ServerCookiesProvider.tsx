// app/ServerCookiesProvider.tsx
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import { ClientCookiesProvider } from './cookies';

export default function ServerCookiesProvider({ children }: { children: ReactNode }) {
  return (
    <ClientCookiesProvider>
      {children}
    </ClientCookiesProvider>
  );
}