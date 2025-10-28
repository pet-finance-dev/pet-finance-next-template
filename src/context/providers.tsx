"use client";

import { usePathname } from "next/navigation";
import type React from "react";
import Footer from "@/layout/footer";
// import { Toaster } from '@/components/ui/sonner';
import Header from "@/layout/header";

interface IProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<IProvidersProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/login" ? (
        <>{children}</>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
      {/* <Toaster /> */}
    </>
  );
};

export default Providers;
