import clsx from "clsx";

export const SpmList = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const classNames = clsx("spm__list", className);
  return <ul className={classNames}>{children}</ul>;
};
