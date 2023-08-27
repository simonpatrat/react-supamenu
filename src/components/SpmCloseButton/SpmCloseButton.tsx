import clsx from "clsx";

export const SpmCloseButton = ({
  className,
  ariaLabel,
}: {
  className?: string;
  ariaLabel?: string;
}) => {
  const classNames = clsx("spm__close-menu-button", className);
  return (
    <button
      type="button"
      className={classNames}
      aria-label={ariaLabel || "close menu"}
    >
      <span className="spm-icon spm-icon--cross"></span>
    </button>
  );
};
