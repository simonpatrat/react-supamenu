import clsx from "clsx";

export const SpmBlock = ({
  megamenu = false,
  sideDropdowns = true,
  alwaysVisible = false,
  children,
  className,
}: {
  megamenu?: boolean;
  sideDropdowns?: boolean;
  alwaysVisible?: boolean;
  children?: React.ReactNode;
  className?: string;
}) => {
  const classNames = clsx("spm__block", className, {
    spm__mega: megamenu,
    "side-dropdowns": sideDropdowns,
    "spm__block--always-visible": alwaysVisible,
  });
  return <div className={classNames}>{children}</div>;
};
