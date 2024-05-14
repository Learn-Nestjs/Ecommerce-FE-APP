'use client'
import React from "react";
import { ThemeProvider } from "next-themes";
import SwitchThemeButton from "./switchThemeButton/page";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider attribute="class" defaultTheme='system' enableSystem disableTransitionOnChange>
      <SwitchThemeButton />
      <ToastContainer />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
