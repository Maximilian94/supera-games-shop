import React from 'react';

import './style.css';

import sortNotSelected from '../../images/iconmonstr-sort-2.svg';
import sortUp from '../../images/iconmonstr-sort-3.svg';
import sortDown from '../../images/iconmonstr-sort-4.svg';

import { useProducts } from '../../context/ProductContext';

function FilterOrderList() {
  const {
    orderProductsByName, orderProductsByScore, orderProductsByPrice, currentOrderType,
  } = useProducts();

  const getSortIcon = (type) => {
    if (currentOrderType.name === type) {
      return currentOrderType.isReverse ? sortDown : sortUp;
    }
    return sortNotSelected;
  };

  return (
    <div className="filter-order-products">
      <p>Ordernar por:</p>
      <button type="button" onClick={() => orderProductsByPrice()}>
        Preço
        <img src={getSortIcon('price')} alt="sort" />
      </button>
      <button type="button" onClick={() => orderProductsByScore()}>
        <p>Avaliações</p>
        <img src={getSortIcon('score')} alt="sort" />
      </button>
      <button type="button" onClick={() => orderProductsByName()}>
        <p>Alfabética</p>
        <img src={getSortIcon('name')} alt="sort" />
      </button>
    </div>
  );
}

export default FilterOrderList;
