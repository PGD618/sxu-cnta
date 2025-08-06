"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "./mobile.css";
import Navbar from "@/components/ui/Navbar";
import DynamicParticles from "@/components/DynamicParticles";
import GlobalEffects from "@/components/GlobalEffects";
import { ParallaxProvider } from 'react-scroll-parallax';

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className} suppressHydrationWarning={true}>
        <DynamicParticles />
        <GlobalEffects />
        <Navbar />
        <main>
          <ParallaxProvider>
            {children}
          </ParallaxProvider>
        </main>
        {/* 在这里可以添加全局的 Footer */}
      </body>
    </html>
  );
}
