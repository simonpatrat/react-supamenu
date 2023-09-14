import clsx from "clsx";

export const SpmDropdownToggleButton = ({
  className,
  label,
  labelVisible,
  icon = "triangle",
  "data-action": dataAction,
}: {
  label?: string;
  className?: string;
  labelVisible?: boolean;
  icon?: "chevron" | "triangle";
  "data-action"?: string;
}) => {
  const classNames = clsx("spm__toggle-button", className);
  return (
    <button type="button" className={classNames} data-action={dataAction}>
      {dataAction === "close" && (
        <span className={`spm-icon spm-icon--${icon}`} aria-hidden></span>
      )}
      {labelVisible ? (
        label
      ) : (
        <span className="visuallyhidden">{label || "Show submenu"}</span>
      )}
      {dataAction !== "close" && (
        <span className={`spm-icon spm-icon--${icon}`} aria-hidden></span>
      )}
    </button>
  );
};
