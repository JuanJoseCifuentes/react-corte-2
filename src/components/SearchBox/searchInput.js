import React from "react";

import "./index.css"

const SearchInput = ({ onChange }) => (
    <input className="input" onChange={(e) => onChange(e.target.value)} type="text" placeholder="Buscar pokemon"/>
)

export default SearchInput;