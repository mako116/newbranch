import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../utils/hooks/useAuth"; // Update the import path as necessary

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [user, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
