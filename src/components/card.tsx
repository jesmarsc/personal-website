import clsx from "clsx";
import Image, { ImageProps } from "next/image";

import { LinkProps } from "next/link";
import { Link } from "@/components/link";

type CardProps = React.ComponentPropsWithoutRef<"div"> & {
  date: string;
  description: string;
  href: LinkProps["href"];
  src: ImageProps["src"];
  technologies: string[];
  title: string;
};

export const Card = ({
  date,
  description,
  href,
  src,
  technologies,
  title,
  ...props
}: CardProps) => {
  return (
    <div
      {...props}
      className={clsx(props.className, "pt-6 border-t border-neutral-700")}
    >
      <div className="grid items-start gap-2 md:gap-8 md:grid-cols-[auto_minmax(20ch,1fr)_3fr_auto]">
        <p className="text-sm text-neutral-400">{date}</p>

        <Link href={href} className="max-w-max">
          <h4 className="cursor-pointer text-2xl font-medium underline underline-offset-8 decoration-neutral-700 hover:decoration-white transition-all">
            {title}
          </h4>
        </Link>

        <p className="text-sm md:max-w-[40ch]">{description}</p>

        <div className="text-sm text-neutral-400">
          {technologies.join(" · ")}
        </div>
      </div>

      <Link href={href} aria-label={title}>
        <Image src={src} alt="" className="mt-6 rounded-lg md:rounded-3xl" />
      </Link>
    </div>
  );
};
