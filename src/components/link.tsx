"use client";

import { forwardRef } from "react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import clsx from "clsx";

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
