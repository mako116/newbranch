"use client"

import Dashboard from "@/componets/Dashboard/Dashboard";
  import { AuthProvider } from "../context/AuthContext";
  import { CookiesProvider } from 'react-cookie'
  import ProtectedRoute from "@/componets/Auth";
 // import Layout from "./layout";

export default function Home() {
  return (
   <CookiesProvider>
      <AuthProvider>
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      </AuthProvider>
   </CookiesProvider>
  );
}
