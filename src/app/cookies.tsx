import { ReactNode } from "react";
import { Cookies } from "react-cookie";
import { CookiesProvider } from "react-cookie";

const cookies = new Cookies();

interface ClientCookiesProviderProps {
  children: ReactNode;
}

export const ClientCookiesProvider: React.FC<ClientCookiesProviderProps> = ({ children }) => (
  <CookiesProvider cookies={cookies}>
    {children}
  </CookiesProvider>
);
