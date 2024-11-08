import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* //! MIGHT CAUSE ISSUES WITH SWIPER */}
          <Script
            src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"
            strategy="lazyOnload"
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />

            {/* Main content area with flex-grow to push footer down */}
            <main className="flex-grow">{children}</main>
            <Toaster />
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
