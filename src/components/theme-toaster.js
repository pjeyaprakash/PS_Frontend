"use client";

import { Toaster } from "sonner";
import { useTheme } from "next-themes";

export default function AppToaster() {
  const { resolvedTheme } = useTheme();
  const toasterTheme = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <Toaster
      theme={toasterTheme}
      position="top-right"
      richColors
      expand
      visibleToasts={100}
      toastOptions={{
        classNames: {
          toast: "my-toast",
          description: "my-toast-desc",
        },
      }}
    />
  );
}
