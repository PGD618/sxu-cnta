import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import "./mobile.css";
import Navbar from "@/components/ui/Navbar";
import DynamicParticles from "@/components/DynamicParticles";
import GlobalEffects from "@/components/GlobalEffects";
import ParallaxWrapper from '@/components/ParallaxWrapper';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "计算机与网络技术协会",
  description: "欢迎来到计算机与网络技术协会",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <DynamicParticles />
        <GlobalEffects />
        <Navbar />
        <main>
          <ParallaxWrapper>
            {children}
          </ParallaxWrapper>
        </main>
        {/* 在这里可以添加全局的 Footer */}
      </body>
    </html>
  );
}
