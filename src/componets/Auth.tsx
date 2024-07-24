import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../utils/hooks/useAuth"; // Update the import path as necessary

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

<<<<<<< HEAD
  // useEffect(() => {
  //   const isAuthenticated = localStorage.getItem('authenticated');
  //   if (!isAuthenticated && pathname !== '/login') {
  //     router.push('/login');
  //   }
  // }, [pathname, router]);
=======
  useEffect(() => {
    if (!user) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [user, router]);
>>>>>>> 8ab1d59881b5f6684313698e17cd559c230069b1

  return <>{children}</>;
};

export default ProtectedRoute;
