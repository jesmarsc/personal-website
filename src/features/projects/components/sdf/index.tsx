import Image, { ImageProps } from "next/image";
import clsx from "clsx";

import { Link } from "@/components/link";

import { links } from "@/constants";

import fca00cImg from "../../assets/fca00c.webp";
import rpciegeImg from "../../assets/rpciege.webp";
import stellarQuestImg from "../../assets/stellar-quest.webp";
import devDocsImg from "../../assets/dev-docs.webp";
import scfImg from "../../assets/scf.webp";

import openOutlineIcon from "@/assets/icons/open-outline.svg";

import styles from "./styles.module.css";

export const SDF = (props: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div {...props} className={clsx(props.className, styles.SDF__container)}>
      <div className={clsx(styles.SDF, "")}>
        <Link
          href={links.STELLAR_QUEST}
          className="[grid-area:a] flex group relative"
        >
          <GridImage src={stellarQuestImg} alt="" />
          <p className="absolute bottom-4 right-4 mix-blend-difference font-title uppercase text-9xl tracking-tight">
            SQ
          </p>
        </Link>

        <Link href={links.RPCIEGE} className="[grid-area:b] flex group">
          <GridImage src={rpciegeImg} alt="" className="object-left min-w-0" />
          <VerticalText>RPCIEGE</VerticalText>
        </Link>

        <Title>Stellar Development Foundation</Title>

        <Link href={links.FCAOOC} className="[grid-area:c] flex group">
          <VerticalText className="rotate-180">FCAOOC</VerticalText>
          <GridImage src={fca00cImg} alt="" className="min-w-0" />
        </Link>
      </div>

      <HorizontalSection />
    </div>
  );
};

type GridImageProps = React.ComponentPropsWithoutRef<"div"> &
  Pick<ImageProps, "src" | "alt">;

const GridImage = ({ alt, className, src, ...props }: GridImageProps) => {
  return (
    <div {...props} className={clsx(className, "relative flex")}>
      <Image
        src={openOutlineIcon}
        alt=""
        className="size-6 absolute top-4 right-4 opacity-100 transition-opacity"
      />

      <Image
        src={src}
        alt={alt}
        className="outline outline-transparent -outline-offset-2 group-hover:outline-white transition-all"
      />
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
      <Link href={links.STELLAR_DOCS} className="group">
        <p className="-mb-8">Dev Docs</p>
        <GridImage src={devDocsImg} alt="" />
      </Link>
      <Link href={links.SCF} className="group">
        <GridImage src={scfImg} alt="" />
        <p className="text-right -mt-8">SCF</p>
      </Link>
    </div>
  );
};
