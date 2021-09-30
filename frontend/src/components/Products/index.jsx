import React, { useEffect, useState } from 'react';

import jsonProducts from './products.json';

import ProductCard from './ProductCard';

import './style.css';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(jsonProducts);
  }, []);
  return (
    <div className="products-list">
      {products.map((product) => <ProductCard productData={product} key={product.id} />)}
    </div>
  );
}

export default Products;
