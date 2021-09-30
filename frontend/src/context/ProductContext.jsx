import React, { createContext, useContext, useState } from 'react';
import { node } from 'prop-types';

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [currentOrderType, setCurrentOrderType] = useState({ name: '', isReverse: false });

  const orderProductsByName = () => {
    const ordered = products.sort((productA, productB) => {
      const nameA = productA.name.toUpperCase();
      const nameB = productB.name.toUpperCase();
      if (nameA < nameB) { return -1; }
      if (nameA > nameB) { return 1; }
      return 0;
    });
    if (currentOrderType.name === 'name' && currentOrderType.isReverse) {
      setProducts([...ordered.reverse()]);
      return setCurrentOrderType({ name: 'name', isReverse: false });
    }
    setProducts([...ordered]);
    return setCurrentOrderType({ name: 'name', isReverse: true });
  };

  const orderProductsByScore = () => {
    const ordered = products.sort((a, b) => a.score - b.score);

    if (currentOrderType.name === 'score' && currentOrderType.isReverse) {
      setCurrentOrderType({ name: 'score', isReverse: false });
      return setProducts([...ordered.reverse()]);
    }
    setCurrentOrderType({ name: 'score', isReverse: true });
    return setProducts([...ordered]);
  };

  const orderProductsByPrice = () => {
    const ordered = products.sort((a, b) => a.price - b.price);

    if (currentOrderType.name === 'price' && currentOrderType.isReverse) {
      setCurrentOrderType({ name: 'price', isReverse: false });
      return setProducts([...ordered.reverse()]);
    }
    setCurrentOrderType({ name: 'price', isReverse: true });
    return setProducts([...ordered]);
  };

  const context = {
    products,
    setProducts,
    orderProductsByName,
    orderProductsByScore,
    orderProductsByPrice,
    currentOrderType,
  };

  return (
    <ProductsContext.Provider value={context}>
      { children }
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}

ProductsProvider.propTypes = {
  children: node,
}.isRequired;
