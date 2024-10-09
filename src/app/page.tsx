import { Card } from "@/components/card";
import { ArrowLink } from "@/components/arrow-link";

import rpciegeImg from "@/features/projects/assets/rpciege.webp";
import fca00cImg from "@/features/projects/assets/fca00c.webp";
import devImg from "@/features/projects/assets/dev-docs.webp";
import scfImg from "@/features/projects/assets/scf.webp";
import sqImg from "@/features/projects/assets/stellar-quest.webp";
import stellarNetworkVisualizerImg from "@/features/projects/assets/stellar-network-visualizer.webp";
import sortingImg from "@/features/projects/assets/sorting-visualizer.webp";

import { links } from "@/constants";

export default function Home() {
  return (
    <div className="px-4 max-w-body mx-auto my-20">
      <div className="my-40 grid gap-4 md:grid-cols-[minmax(max-content,1fr)_fit-content(65ch)] max-w-7xl mx-auto items-start">
        <ArrowLink href={links.EMAIL} className="md:justify-self-center">
          contact@jesmar.dev
        </ArrowLink>

        <p className="text-5xl tracking-tighter font-medium">
          Hello! I'm a Los Angeles based{" "}
          <span className="underline">Frontend Developer</span> that enjoys
          bringing concepts to life.
        </p>
      </div>

      <div>
        <h2 className="text-7xl md:text-9xl font-medium">Work</h2>

        <h3 className="mt-16 text-5xl md:text-6xl">
          Stellar Development Foundation
        </h3>

        <div className="mt-8 space-y-10 md:space-y-20">
          <Card
            date="2024"
            description="A series of small coding puzzles aimed at teaching you the basics of Rust development for smart contracts on the Stellar network."
            src={rpciegeImg}
            technologies={["React", "Next.js"]}
            title="RPCiege"
            href={links.RPCIEGE}
          />

          <Card
            date="2023"
            description="A collection of games and tutorials designed to familiarize you with smart contracts on the Stellar network."
            src={fca00cImg}
            technologies={["React", "Next.js"]}
            title="FCAOOC"
            href={links.FCAOOC}
          />

          <Card
            date="2022"
            description="A comprehensive resource for developers and users interested in building on and interacting with the Stellar network."
            src={devImg}
            technologies={["React", "Docusaurus"]}
            title="Developer Docs"
            href={links.STELLAR_DOCS}
          />

          <Card
            date="2021"
            description="An open-application program that draws on community input to distribute awards to support projects built on Stellar and Soroban."
            src={scfImg}
            technologies={["Preact", "Cloudflare Workers"]}
            title="Stellar Community Fund"
            href={links.SCF}
          />

          <Card
            date="2021"
            description="Teaches you about Stellar operations and fundamentals in a gamified experience."
            src={sqImg}
            technologies={["React", "Vite"]}
            title="Stellar Quest"
            href={links.STELLAR_QUEST}
          />
        </div>
      </div>

      <div className="mt-28 md:mt-60 space-y-10 md:space-y-20">
        <h2 className="text-7xl md:text-9xl font-medium">Personal</h2>

        <Card
          date="2024"
          description="Navigate through the stars, view real-time activity, and discover the dynamic world of Stellar in an engaging and immersive experience."
          src={stellarNetworkVisualizerImg}
          technologies={["React", "Vite", "Three.js"]}
          title="Stellar Network Visualizer"
          href={links.STELLAR_VISUALIZER}
        />

        <Card
          date="2024"
          description="Discover the beauty of algorithms with this interactive website that visualizes sorting techniques."
          src={sortingImg}
          technologies={["React", "Vite", "Canvas"]}
          title="Sorting Visualizer"
          href={links.SORTING_VISUALIZER}
        />
      </div>
    </div>
  );
}
