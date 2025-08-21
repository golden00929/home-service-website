import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sua Trua Saigon - Professional Repair Services",
  description: "전문 수리 및 정비 서비스 in Saigon - Sua Trua (수리 전문가)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}