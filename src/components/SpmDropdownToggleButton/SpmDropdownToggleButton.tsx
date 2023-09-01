import clsx from "clsx";

export const SpmDropdownToggleButton = ({
  className,
  label,
  labelVisible,
}: {
  label?: string;
  className?: string;
  labelVisible?: boolean;
}) => {
  const classNames = clsx("spm__toggle-button", className);
  return (
    <button type="button" className={classNames}>
      {labelVisible ? (
        label
      ) : (
        <span className="visuallyhidden">{label || "Show submenu"}</span>
      )}
      <span className="spm-icon spm-icon--triangle" aria-hidden></span>
    </button>
  );
};
