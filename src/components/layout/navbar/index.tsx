import clsx from "clsx";
import Image from "next/image";

import { links, routes } from "@/constants";

import { Link } from "@/components/link";

import styles from "./styles.module.css";

import githubIcon from "@/assets/icons/logo-github.svg";
import linkedinIcon from "@/assets/icons/logo-linkedin.svg";

export function Navbar() {
  return (
    <nav
      className={clsx(
        "flex flex-wrap [align-items:last_baseline] gap-x-8 gap-y-4 max-w-body mx-auto justify-between my-4 px-4",
        "sm:my-8"
      )}
    >
      <Link href={routes.HOME} className="font-title-serif text-6xl uppercase">
        Jesmar
      </Link>

      <div className={styles.NavMenu}>
        <Link href={routes.HOME}>Home</Link>
        <Link href={routes.PROJECTS}>Projects</Link>
        <Link href={links.GITHUB}>
          <Image src={githubIcon} alt="" className="size-6" />
        </Link>
        <Link href={links.LINKEDIN}>
          <Image src={linkedinIcon} alt="" className="size-6" />
        </Link>
      </div>
    </nav>
  );
}
