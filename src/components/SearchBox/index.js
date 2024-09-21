import React from "react";

import SearchInput from "./searchInput";
import { FaSearch } from "react-icons/fa";

import "./index.css"

const SearchBox = ({ onSearch }) => {
    return (
        <div className="searchBox">
            <FaSearch className="icon"></FaSearch>
            <SearchInput onChange={onSearch} />
        </div>
    )
}

export default SearchBox;