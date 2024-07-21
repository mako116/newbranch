import AuthGuard from "@/componets/Auth";
import Dashboard from "@/componets/Dashboard/Dashboard";
  import Navbar from "@/componets/Navbar/Navbar";
 // import Layout from "./layout";

export default function Home() {
  return (
    <AuthGuard>
    <main>
       <Dashboard/>
    </main>
   </AuthGuard>
  );
}
