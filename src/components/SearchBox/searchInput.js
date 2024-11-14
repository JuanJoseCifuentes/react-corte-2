import React from "react";

import { useFiltersContext } from "../../context/filterCtx";

import "./index.css"

const SearchInput = () => {
    const { filters, setFilters } = useFiltersContext(); return (

        <input
            className="input"
            onChange={(e) =>  setFilters({ ...filters, search: e.target.value })}
            type="text"
            placeholder="Buscar pokemon" />
    )
}

export default SearchInput;