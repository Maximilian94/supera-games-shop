import React from 'react';

import './style.css';

import sort from '../../images/icons8-sort-96.png';

function FilterOrderList() {
  return (
    <div className="filter-order-products">
      <p>Ordernar por:</p>
      <button type="button">
        Preço
        <img src={sort} alt="sort" />
      </button>
      <button type="button">
        <p>Avaliações</p>
        <img src={sort} alt="sort" />
      </button>
      <button type="button">
        <p>Alfabética</p>
        <img src={sort} alt="sort" />
      </button>
    </div>
  );
}

export default FilterOrderList;
