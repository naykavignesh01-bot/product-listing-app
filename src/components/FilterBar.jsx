import { useRef, useEffect } from "react";

function FilterBar({ search, setSearch }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="filter-bar">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search Electronics..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default FilterBar;