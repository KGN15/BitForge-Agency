import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import LoadingScreen from "@/components/LoadingScreen";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "BitForge Agency — Forging Digital Excellence",
  description: "High-end development collective specializing in Next.js, MERN Stack, and Electron.js. We forge scalable solutions that empower your business.",
  keywords: ["BitForge", "web development", "Next.js", "MERN", "Electron.js", "agency"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      
      <body  cz-shortcut-listen="true"><LoadingScreen /><main>{children}</main></body>
    </html>
  );
}
