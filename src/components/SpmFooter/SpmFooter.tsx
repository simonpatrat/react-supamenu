import clsx from "clsx";

export const SpmFooter = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const classNames = clsx("spm-footer", className);

  return <div className={classNames}>{children}</div>;
};
