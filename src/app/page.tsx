import AuthGuard from "@/componets/Auth";
import { Homesection } from "@/componets/Home/homesection";
// import Layout from "./layout";

export default function Home() {
  return (
    <AuthGuard>
      <Homesection />
   </AuthGuard>
  );
}
