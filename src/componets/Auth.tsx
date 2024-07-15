// components/AuthGuard.tsx
'use client';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated');
    if (!isAuthenticated && pathname !== '/login') {
      router.push('/login');
    }
  }, [pathname, router]);

  return <>{children}</>;
};

export default AuthGuard;
