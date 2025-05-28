import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DataMentor Pro - Accelerate Your Data Career",
  description: "Get personalized mentoring from industry experts with 10+ years in analytics. From resume optimization to interview prep, we'll help you land your dream data role.",
  keywords: "data analyst, mentoring, career coaching, resume builder, interview prep, data science, analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
