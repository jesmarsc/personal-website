import clsx from "clsx";

type FooterProps = React.ComponentPropsWithoutRef<"div">;

export const Footer = (props: FooterProps) => {
  return <div {...props} className={clsx(props.className, "")} />;
};
