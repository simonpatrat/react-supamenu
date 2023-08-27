export const Search = ({
  label,
  placeholder,
}: {
  label?: string;
  placeholder?: string;
}) => {
  return (
    <div className="spm-search">
      <span
        className="spm-icon spm-icon--m-glass spm-search__icon"
        aria-hidden
      ></span>
      <input
        type="search"
        aria-label={label || "search"}
        placeholder={placeholder || "Search..."}
      />
    </div>
  );
};
