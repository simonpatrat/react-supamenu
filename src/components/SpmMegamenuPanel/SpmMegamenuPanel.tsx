import clsx from "clsx";
import React from "react";

export const SpmMegamenuPanel = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const classNames = clsx("spm__block__content", "spm__mega__panel", className);

  return (
    <div className={classNames}>
      <div className="spm-container">
        <div className="spm__mega__panel__content">{children}</div>
      </div>
    </div>
  );
};
