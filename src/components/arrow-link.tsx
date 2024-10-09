import clsx from "clsx";
import Image from "next/image";

import { Link } from "./link";

import arrowIcon from "@/assets/icons/arrow.svg";

type ArrowLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

export const ArrowLink = ({
  className,
  children,
  ...props
}: ArrowLinkProps) => {
  return (
    <Link
      {...props}
      className={clsx(className, "group flex items-center gap-2")}
    >
      {children}

      <Image
        src={arrowIcon}
        alt=""
        className="group-hover:rotate-45 size-[0.65em] transition-transform"
      />
    </Link>
  );
};
