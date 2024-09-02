import { forwardRef } from "react";
import Image from "next/image";
import { ImageProps } from "next/dist/shared/lib/get-img-props";
import { useIntersection } from "@mantine/hooks";
import clsx from "clsx";

import { Link } from "@/components/link";

import { links } from "@/constants";

import githubIcon from "@/assets/icons/logo-github.svg";
import openOutlineIcon from "@/assets/icons/open-outline.svg";

import stellerNetworkVisualizerImg from "../../assets/stellar-network-visualizer.webp";
import sortingVisualizerImg from "../../assets/sorting-visualizer.webp";

export const Personal = (props: React.ComponentPropsWithoutRef<"div">) => {
  const { ref: firstRef, entry: firstEntry } = useIntersection({
    threshold: 0.5,
  });

  const { ref: secondRef, entry: secondEntry } = useIntersection({
    threshold: 0.5,
  });

  return (
    <div {...props} className={clsx(props.className, "max-w-8xl mx-auto")}>
      <h2 className="font-title uppercase text-[clamp(1rem,25vw,15.46rem)] leading-none">
        Personal
        <span className="block text-right"> Projects</span>
      </h2>

      <div className="mt-20 sm:mt-56 space-y-20 sm:space-y-56">
        <ProjectCard
          ref={firstRef}
          isVisible={firstEntry?.isIntersecting}
          title="Stellar Network Visualizer"
          src={stellerNetworkVisualizerImg}
          techStack={["React", "Three.js"]}
          github={links.STELLAR_VISUALIZER_GITHUB}
          href={links.STELLAR_VISUALIZER}
        >
          Explore the cosmos with this interactive 3D visualization of the
          Stellar Network! Navigate through the stars, view real-time activity,
          and discover the dynamic world of Stellar in an engaging and immersive
          experience.
        </ProjectCard>

        <ProjectCard
          ref={secondRef}
          isVisible={secondEntry?.isIntersecting}
          title="Sorting Visualizer"
          src={sortingVisualizerImg}
          techStack={["React", "Canvas", "Valtio"]}
          github={links.SORTING_VISUALIZER_GITHUB}
          href={links.SORTING_VISUALIZER}
        >
          Discover the beauty of algorithms with this interactive website that
          visualizes sorting techniques. Watch as a bar graph dynamically
          rearranges itself, demonstrating popular sorting algorithms like
          Bubble Sort, Quick Sort, and Merge Sort. Dive in and explore the
          fascinating world of algorithms, one sort at a time!
        </ProjectCard>
      </div>
    </div>
  );
};

type ProjectCardProps = React.ComponentPropsWithRef<"div"> & {
  isVisible?: boolean;
  src: ImageProps["src"];
  techStack: string[];
  title: string;
  github: string;
  href: string;
};

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      children,
      className,
      src,
      techStack,
      title,
      isVisible,
      github,
      href,
      ...props
    },
    ref
  ) => {
    return (
      <div className="group">
        <Image
          src={src}
          alt=""
          className={clsx(
            "fixed inset-0 size-full object-cover blur-md transition-opacity duration-500 -z-10 brightness-[0.2] pointer-events-none",
            !isVisible && "opacity-0"
          )}
        />

        <div
          {...props}
          ref={ref}
          className={clsx(className, "px-2 max-w-5xl group-even:ml-auto")}
        >
          <div className="grid sm:grid-cols-[auto_1fr] max-sm:gap-4 items-center">
            <h3
              className={clsx(
                "px-2 z-10 font-title tracking-tight uppercase max-w-min drop-shadow-outline [font-size:clamp(4rem,10vw,6rem)] leading-none",
                "sm:group-even:text-right sm:group-even:-ml-[2em] sm:group-odd:-mr-[2em]"
              )}
            >
              {title}
            </h3>

            <Image
              src={src}
              alt=""
              className="sm:group-even:order-first clip-bottom"
            />
          </div>

          <div className="max-w-xl mt-4 sm:mt-8 font-light space-y-2 sm:space-y-4 sm:group-odd:text-right sm:group-odd:ml-auto">
            <div className="flex gap-1 sm:group-odd:justify-end">
              {techStack.map((tech) => (
                <p key={tech} className="bg-white/10 px-4 rounded-full">
                  {tech}
                </p>
              ))}
            </div>

            <p className="leading-none text-gray-300">{children}</p>

            <div className="flex gap-4 sm:group-odd:justify-end text-lg">
              <Link href={github} className="flex items-center gap-1">
                <Image src={githubIcon} alt="" className="size-5" />
                Github
              </Link>

              <Link href={href} className="flex items-center gap-1">
                <Image src={openOutlineIcon} alt="" className="size-5" />
                Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
