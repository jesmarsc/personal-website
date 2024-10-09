import { links, routes } from "@/constants";

import { Link } from "@/components/link";
import { ArrowLink } from "@/components/arrow-link";

import styles from "./styles.module.css";

export function Navbar() {
  return (
    <div className="sticky top-0 z-10 bg-black/60 backdrop-blur py-4">
      <nav className="flex flex-wrap items-center gap-4 max-w-body mx-auto justify-between px-4 text-sm">
        <Link href={routes.HOME}>
          Jesmar <span className="max-sm:hidden">Castillo</span>
        </Link>

        <div className={styles.NavMenu}>
          <ArrowLink href={links.EMAIL}>Email</ArrowLink>
          <ArrowLink href={links.GITHUB}>GitHub</ArrowLink>
          <ArrowLink href={links.LINKEDIN}>LinkedIn</ArrowLink>
        </div>
      </nav>
    </div>
  );
}
