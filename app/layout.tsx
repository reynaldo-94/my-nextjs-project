"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import createEmotionCache from "@/src/utils/createEmotionCache"; // Asegúrate de tener este archivo
import theme from "@/src/utils/theme"; // Tema de MUI personalizado
import NavigationBar from "@/src/components/NavigationBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const clientSideEmotionCache = createEmotionCache();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CacheProvider value={clientSideEmotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavigationBar />
            <main>{children}</main>
            <footer style={{ padding: '10px', backgroundColor: '#222', color: '#fff' }}>
              <p>Pie de página global</p>
            </footer>
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
