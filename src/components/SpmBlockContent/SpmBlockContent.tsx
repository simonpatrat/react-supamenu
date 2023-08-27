import clsx from "clsx";
import { SpmMegamenuPanel } from "../SpmMegamenuPanel";

export const SpmBlockContent = ({
  className,
  children,
  isMegamenu,
}: {
  className?: string;
  children?: React.ReactNode;
  isMegamenu?: boolean;
}) => {
  const classNames = clsx("spm__block__content", className, {
    spm__mega__panel: isMegamenu,
  });
  return isMegamenu ? (
    <SpmMegamenuPanel>{children}</SpmMegamenuPanel>
  ) : (
    <div className={classNames}>{children}</div>
  );
};
