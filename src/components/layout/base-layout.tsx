import clsx from "clsx";
import { Navbar } from "./navbar";

type BaseLayoutProps = React.ComponentPropsWithoutRef<"div">;

export const BaseLayout = ({ className, ...props }: BaseLayoutProps) => {
  return (
    <div {...props} className={clsx(className, "")}>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
};
