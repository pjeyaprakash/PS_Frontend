"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="luminary-theme"
      themes={["light", "dark", "system"]}
    >
      {children}
    </ThemeProvider>
  );
}
