import AuthGuard from "@/componets/Auth";
import { Homesection } from "@/componets/Home/homesection";
import { Navbar } from "@/componets/Navbar/Navbar";
// import Layout from "./layout";

export default function Home() {
  return (
    <AuthGuard>
    <main>
      <Navbar />
      <Homesection />
    </main>
   </AuthGuard>
  );
}
