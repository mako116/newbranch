<<<<<<< HEAD
import AuthGuard from "@/componets/Auth";
import { Homesection } from "@/componets/Home/homesection";
// import Layout from "./layout";
=======
"use client"

import Dashboard from "@/componets/Dashboard/Dashboard";
  import { AuthProvider } from "../context/AuthContext";
  import { CookiesProvider } from 'react-cookie'
  import ProtectedRoute from "@/componets/Auth";
import { useEffect, useState } from "react";
 // import Layout from "./layout";
>>>>>>> 8ab1d59881b5f6684313698e17cd559c230069b1

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
<<<<<<< HEAD
    <AuthGuard>
      <Homesection />
   </AuthGuard>
=======
   <CookiesProvider>
      <AuthProvider>
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      </AuthProvider>
   </CookiesProvider>
>>>>>>> 8ab1d59881b5f6684313698e17cd559c230069b1
  );
}
