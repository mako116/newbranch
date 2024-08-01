// src/contexts/AuthContext.tsx

"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { AuthUser } from "../utils/types/auth";
import useCookie from "../utils/hooks/useCookies";

interface AuthProviderProps {
    children: ReactNode;
}

interface TAuthContext {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
}

export const AuthContext = createContext<TAuthContext>({
  user: null,
  setUser: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const { setCookie, getCookie, removeCookie } = useCookie();

  useEffect(() => {
    if (!user) {
      let existingUser = null;
      const getFromCookie = async () => (existingUser = getCookie("user"));
      getFromCookie();

      if (existingUser) {
        try {
          setUser(JSON.parse(existingUser));
        } catch (e) {
          console.log(e);
        }
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
