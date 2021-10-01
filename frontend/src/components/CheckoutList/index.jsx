import React, { useEffect, useState } from 'react';

import './style.css';

import CheckoutProduct from './CheckoutProduct';

function CheckoutList() {
  const [products, setProduct] = useState({});

  const test = {
    id: 312,
    name: 'Super Mario Odyssey',
    price: 197.88,
    score: 100,
    image: 'super-mario-odyssey.png',
  };

  useEffect(() => {
    setProduct(test);
  }, []);
  return (
    <div>
      <CheckoutProduct product={products} />
      <CheckoutProduct product={products} />
      <CheckoutProduct product={products} />
      <CheckoutProduct product={products} />
      <CheckoutProduct product={products} />
      <CheckoutProduct product={products} />
      <CheckoutProduct product={products} />
      <CheckoutProduct product={products} />
      <CheckoutProduct product={products} />
      <CheckoutProduct product={products} />
    </div>
  );
}

export default CheckoutList;
