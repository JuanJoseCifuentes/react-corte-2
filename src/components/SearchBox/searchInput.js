import React from "react";

import { useFilterContext } from "../../context/filterCtx";

import "./index.css";

const SearchInput = () => {
  const { filters, setFilters } = useFilterContext();
  return (
    <input
      className="input"
      onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      type="text"
      placeholder="Buscar pokemon"
    />
  );
};

export default SearchInput;
