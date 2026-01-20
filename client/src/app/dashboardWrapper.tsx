"use client";
import { ReactNode, useEffect } from "react";
import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";
import { cn } from "@/src/lib/utils";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDarkMode]);
  return (
    <div className="w-full-50 flex min-h-screen bg-gray-50 text-gray-900">
      <Sidebar />
      <main
        className={cn("dark:bg-dark-bg flex w-full flex-col bg-gray-50", {
          "md:pl-64": !isSidebarCollapsed,
        })}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
