import clsx from "clsx";

export const SpmBlock = ({
  megamenu = false,
  children,
  className,
}: {
  megamenu?: boolean;
  children?: React.ReactNode;
  className?: string;
}) => {
  const classNames = clsx("spm__block", className, {
    spm__mega: megamenu,
  });
  return <div className={classNames}>{children}</div>;
};
