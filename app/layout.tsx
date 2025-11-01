import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "산단 안전의 '속 빈 강정' 채운다 | KICOX 제안서",
  description:
    "고위험 중소기업 스마트 관제센터 의무 연계를 통한 산업집적법 시행령 개정 방안",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${notoSansKr.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
