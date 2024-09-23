import { forwardRef } from "react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import Image from "next/image";
import clsx from "clsx";

import arrowIcon from "@/assets/icons/arrow.svg";

export type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const pathName = usePathname();

  const pathnameProp =
    typeof props.href === "string" ? props.href : props.href.pathname;

  const isExternalLink =
    props.href.toString().startsWith("http") ||
    props.href.toString().startsWith("//");

  const defaultProps = isExternalLink
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <NextLink
      ref={ref}
      {...defaultProps}
      {...props}
      className={clsx(props.className)}
      {...(pathName === pathnameProp && { "data-active": "true" })}
    />
  );
});

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
