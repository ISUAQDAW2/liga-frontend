import React from "react";
import "./SearchBox.css";

const SearchBox = (props) => {
  return (
    <div className="search-container">
      <input
        className="search"
        type="search"
        placeholder="Introduce un nombre... Ej: Messi"
        onChange={props.searchChange}
      />
      <input
        className="search"
        type="search"
        placeholder="Introduce una posicion... Ej: ED"
        onChange={props.searchPosition}
        maxLength="3"
      />
    </div>
  );
};

export default SearchBox;
