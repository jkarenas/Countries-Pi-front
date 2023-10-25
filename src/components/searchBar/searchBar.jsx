import React from 'react';
import './searchBar.css';

const SearchBar = ({ searchString, setSearchString, handleSearchSubmit }) => {
  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSearchSubmit}>
        <input
          placeholder="busqueda"
          type="search"
          value={searchString}
          onChange={handleChange}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default SearchBar;


