import clsx from "clsx";

export const SpmGroup = ({
  className,
  children,
  bottom,
}: {
  children?: React.ReactNode;
  className?: string;
  bottom?: boolean;
}) => {
  const classNames = clsx(
    "spm__group",
    {
      "spm__group--bottom": bottom,
    },
    className
  );
  return <div className={classNames}>{children}</div>;
};
