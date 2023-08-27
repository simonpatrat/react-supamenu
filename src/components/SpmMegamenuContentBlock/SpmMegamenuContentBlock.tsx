import clsx from "clsx";
import React from "react";

export const SpmMegamenuContentBlock = ({
  children,
  className,
  title,
}: {
  title?: JSX.Element | string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const classNames = clsx("spm__mega__panel__content__block", className);

  return (
    <div className={classNames}>
      {typeof title === "string" ? (
        <p className="spm__mega__panel__content__block__title">Lorem, ipsum.</p>
      ) : (
        title || null
      )}
      {children}
    </div>
  );
};
