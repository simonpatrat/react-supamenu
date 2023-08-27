import clsx from "clsx";

export const SpmDropdownToggleButton = ({
  className,
  label,
}: {
  label?: string;
  className?: string;
}) => {
  const classNames = clsx("spm__toggle-button", className);
  return (
    <button type="button" className={classNames}>
      <span className="visuallyhidden">{label || "Show submenu"}</span>
      <span className="spm-icon spm-icon--triangle" aria-hidden></span>
    </button>
  );
};
