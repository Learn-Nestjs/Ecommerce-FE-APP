'use client'
import React from "react";
import { ThemeProvider } from "next-themes";
import SwitchThemeButton from "./switchThemeButton/page";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider attribute="class" defaultTheme='system' enableSystem disableTransitionOnChange>
      <SwitchThemeButton />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
