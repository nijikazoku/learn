import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined" && !localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, [setTheme]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
