import { useUser } from "./useUser";
import axios from "axios";
import { AuthResponse, TLogin, TRegister } from "../types/auth";
import useCookie from "./useCookies";

const API_URL = 'https://ninemileon-backend-7ip8.onrender.com';

const handleAxiosError = (err: any) => {
  if (err && err?.response && err.response?.data) {
    throw { ...err.response.data, success: false } as AuthResponse;
  } else {
    throw err;
  }
};

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();

  const { getCookie } = useCookie();

  const refreshUserFromCookie = async () => {
    const existingUser = await getCookie("user");
    if (existingUser) {
      try {
        addUser(JSON.parse(existingUser));
      } catch (e) {
        console.log(e);
      }
    }
  };

  const register = async (creds: TRegister) => {
    try {
      const res = await axios.post(`${API_URL}auth/register`, creds);
      if (res.data?.data && res.data.data?.token) addUser(res.data.data);
      return res.data as AuthResponse;
    } catch (err) {
      handleAxiosError(err);
    }
  };

  const login = async (creds: TLogin) => {
    try {
      const res = await axios.post(`${API_URL}auth/login`, creds);
      if (res.data?.data && res.data.data?.token) addUser(res.data.data);
      return res.data as AuthResponse;
    } catch (err) {
      handleAxiosError(err);
    }
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, register, logout, refreshUserFromCookie };
};