import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/layout/navbar";
import { SEO } from "@/components/seo";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

      <SEO />

      <Navbar />

      <Component {...pageProps} />
    </>
  );
}
