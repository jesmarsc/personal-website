import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Anton, Playfair_Display } from "next/font/google";

import { Navbar } from "@/components/layout/navbar";

const title = Anton({ subsets: ["latin"], weight: ["400"] });

const title_serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          --font-title: ${title.style.fontFamily};
          --font-title-serif: ${title_serif.style.fontFamily};
        }
      `}</style>

      <Navbar />

      <Component {...pageProps} />
    </>
  );
}
