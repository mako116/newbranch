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

interface Props {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }: Props) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};