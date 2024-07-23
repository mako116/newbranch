import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import AuthGuard from "@/componets/Auth";
import { Providers } from './Providers'

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "9 Mileon",
  description: "Getting you to financial stability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
  
        <Providers>
          {children}
        </Providers>
    
      </body>
    </html>
  );
}
