import Image from "next/image";
import clsx from "clsx";

import { Link } from "@/components/link";

import { links } from "@/constants";

import fca00cImg from "../../assets/fca00c.webp";
import rpciegeImg from "../../assets/rpciege.webp";
import stellarQuestImg from "../../assets/stellar-quest.webp";
import devDocsImg from "../../assets/dev-docs.webp";
import scfImg from "../../assets/scf.webp";

import styles from "./styles.module.css";

export const SDF = (props: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div {...props} className={clsx(props.className, styles.SDF__container)}>
      <div className={clsx(styles.SDF, "")}>
        <Link href={links.STELLAR_QUEST} className="[grid-area:a] relative">
          <p className="absolute bottom-4 right-4 mix-blend-difference font-title uppercase text-9xl tracking-tight">
            SQ
          </p>

          <Image src={stellarQuestImg} alt="" className="h-full" />
        </Link>

        <Link href={links.RPCIEGE} className="[grid-area:b] flex">
          <Image src={rpciegeImg} alt="" className="object-left min-w-0" />

          <VerticalText>RPCIEGE</VerticalText>
        </Link>

        <Title>Stellar Development Foundation</Title>

        <Link href={links.FCAOOC} className="[grid-area:c] relative flex">
          <VerticalText className="rotate-180">FCAOOC</VerticalText>

          <Image src={fca00cImg} alt="" className="min-w-0" />
        </Link>
      </div>

      <HorizontalSection />
    </div>
  );
};

type TitleProps = React.ComponentPropsWithoutRef<"h3">;

const Title = ({ className, ...props }: TitleProps) => {
  return (
    <h3
      {...props}
      className={clsx(
        className,
        "leading-none font-title-serif uppercase tracking-tighter max-w-min max-lg:mb-6 max-lg:px-4",
        "[font-size:clamp(2rem,12vw,5rem)] lg:[font-size:clamp(2rem,6vw,6rem)]"
      )}
    />
  );
};

type VerticalTextProps = React.ComponentPropsWithoutRef<"p">;

const VerticalText = ({ className, ...props }: VerticalTextProps) => {
  return (
    <p
      {...props}
      className={clsx(
        className,
        "font-title uppercase tracking-tight text-7xl sm:text-8.5xl [writing-mode:vertical-rl]"
      )}
    />
  );
};

type HorizontalSectionProps = React.ComponentPropsWithoutRef<"div">;

const HorizontalSection = ({ className, ...props }: HorizontalSectionProps) => {
  return (
    <div {...props} className={clsx(className, styles.HorizontalSection, "")}>
      <Link href={links.STELLAR_DOCS}>
        <p>Dev Docs</p>
        <Image src={devDocsImg} alt="" className="ml-[var(--sdf-gap)] -mt-8" />
      </Link>
      <Link href={links.SCF}>
        <Image src={scfImg} alt="" className="-ml-[var(--sdf-gap)] -mb-8" />
        <p className="text-right">SCF</p>
      </Link>
    </div>
  );
};
