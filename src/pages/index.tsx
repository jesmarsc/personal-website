import Image from "next/image";

import bg from "@/assets/home-bg.webp";

export default function Home() {
  return (
    <div>
      <Image
        src={bg}
        alt=""
        className="fixed w-full h-full inset-0 -z-10 opacity-30 blur-sm object-cover pointer-events-none"
      />

      <main className="flex flex-col justify-end min-h-[calc(100svh-12rem)] max-w-body mx-auto px-4">
        <div className="ml-auto max-w-max text-right">
          <h2 className="text-7xl lg:text-8xl font-title-serif tracking-tight uppercase">
            Jesmar Castillo
          </h2>

          <p className="font-thin text-2xl tracking-tighter">
            Web Developer, based in Los Angeles
          </p>

          <a className="text-neutral-300" href="mailto:contact@jesmar.dev">
            contact@jesmar.dev
          </a>
        </div>
      </main>
    </div>
  );
}
