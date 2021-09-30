import React from 'react';
import './style.css';

import loupe from '../../../images/loupe.png';

function Search() {
  return (
    <div className="div-header-search">
      <input
        type="text"
        placeholder="Buscar"
        className="header-search"
      />
      <button type="button">
        <img src={loupe} alt="search-loupe" />
      </button>
    </div>
  );
}

export default Search;
