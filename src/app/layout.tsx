import type { Metadata, Viewport } from "next";

import { BaseLayout } from "@/components/layout/base-layout";
import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { links } from "@/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL(links.PORTFOLIO),
  title: "Jesmar Castillo",
  description:
    "Jesmar Castillo is a web developer who enjoys building dynamic and engaging web experiences.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "/favicon.png", type: "image/png", sizes: "192x192" }],
  },
  openGraph: {
    images: "/og.png",
    siteName: "Jesmar Castillo",
    type: "website",
    url: links.PORTFOLIO,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
