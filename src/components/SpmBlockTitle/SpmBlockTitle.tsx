import clsx from "clsx";
import { SpmDropdownToggleButton } from "../SpmDropdownToggleButton";

export const SpmBlockTitle = ({
  label,
  hasDropdown,
  className,
  dropdownButtonLabel,
  icon = "triangle",
}: {
  label: JSX.Element | string;
  hasDropdown?: boolean;
  className?: string;
  dropdownButtonLabel?: string;
  icon?: "chevron" | "triangle";
}) => {
  const classNames = clsx("spm__block__title", className);
  return (
    <p className={classNames}>
      {label}
      {hasDropdown || dropdownButtonLabel ? (
        <SpmDropdownToggleButton
          label={dropdownButtonLabel || "Show submenu"}
          icon={icon}
        />
      ) : null}
    </p>
  );
};
