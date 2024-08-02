"use client";

import { ReactNode, createContext, useState } from "react";
import { TRegister } from "../utils/types/auth";

interface RegisterProviderProps {
  children: ReactNode;
}

interface RegisterContextType {
  registerData: TRegister;
  setRegisterData: (data: TRegister) => void;
}

const defaultRegisterData: TRegister = {
  firstName: "",
  lastName: "",
  email: "",
   password: "",
};

export const RegisterContext = createContext<RegisterContextType>({
  registerData: defaultRegisterData,
  setRegisterData: () => {},
});

export const RegisterProvider: React.FC<RegisterProviderProps> = ({ children }) => {
  const [registerData, setRegisterData] = useState<TRegister>(defaultRegisterData);

  return (
    <RegisterContext.Provider value={{ registerData, setRegisterData }}>
      {children}
    </RegisterContext.Provider>
  );
};
