import clsx from "clsx";
import React from "react";

export const SpmComponent = ({
  children,
  align,
  className,
}: {
  children?: React.ReactNode;
  align?: "left" | "right";
  className?: string;
}) => {
  const classNames = clsx("spm-component", className, {
    [`align-${align}`]: align,
  });

  return <div className={classNames}>{children}</div>;
};
