import clsx from "clsx";
import { SpmDropdownToggleButton } from "../SpmDropdownToggleButton";

export const SpmBlockTitle = ({
  label,
  hasDropdown,
  className,
  dropdownButtonLabel,
}: {
  label: JSX.Element | string;
  hasDropdown?: boolean;
  className?: string;
  dropdownButtonLabel?: string;
}) => {
  const classNames = clsx("spm__block__title", className);
  return (
    <p className={classNames}>
      {label}
      {hasDropdown || dropdownButtonLabel ? (
        <SpmDropdownToggleButton
          label={dropdownButtonLabel || "Show submenu"}
        />
      ) : null}
    </p>
  );
};
