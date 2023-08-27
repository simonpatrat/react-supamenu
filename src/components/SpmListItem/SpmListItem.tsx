import clsx from "clsx";

export const SpmListItem = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const classNames = clsx("spm__list__item", className);
  return <li className={classNames}>{children}</li>;
};
