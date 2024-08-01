"use client"

import Dashboard from "@/componets/Dashboard/Dashboard";
  import { AuthProvider } from "../context/AuthContext";
  import { CookiesProvider } from 'react-cookie'
  import ProtectedRoute from "@/componets/Auth";
import { useEffect, useState } from "react";
 // import Layout from "./layout";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  return (
  //  <CookiesProvider>
  //     <AuthProvider>
  //       <ProtectedRoute>
          <Dashboard/>
  //       </ProtectedRoute>
  //     </AuthProvider>
  //  </CookiesProvider>
  );
}
