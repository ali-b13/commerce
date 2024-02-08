import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/navbar/index'
import { Suspense } from "react";
import Footer from "@/components/footer";
import UserLoginModal from "@/components/authModel/loginModel";
import UserRegisterModal from "@/components/authModel/registerModel";
import ToastProvider from "./providers/ToastProvider";
import {getServerSession} from "next-auth";
import { authConfig } from "@/authConfig";
import { SessionProp } from "./lib/data/types";
import Provider from "./providers/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arma shopping",
  description: "shopping application ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session :SessionProp|null=await getServerSession(authConfig)
  return (
    <html lang="en">
     
      <body className={inter.className}>
    

           `<Provider>

         <NavBar session={session}/>
            <UserLoginModal/>
            <UserRegisterModal/>
            <ToastProvider/>
          <Suspense>
          <main>{children}</main>
        </Suspense>
        <Footer/>
           </Provider>
       
        
        </body>
    </html>
  );
}
