import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "리샘한의원 분당점 | 피부미용 전문 한의원",
  description: "20년 임상이 증명하는 한방 피부 솔루션. 고요함 속에서 피부의 본질을 다스리는 시간, 리샘한의원 분당점.",
  keywords: "분당 한의원, 분당 피부과, 한방 리프팅, 트러블 케어, 색소 케어, 두피 케어",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
