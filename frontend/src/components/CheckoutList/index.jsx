import React from 'react';

import './style.css';

import CheckoutProduct from './CheckoutProduct';

import { useCart } from '../../context/CartContext';

function CheckoutList() {
  const { cart } = useCart();

  return (
    <div>
      {cart.map((product) => <CheckoutProduct product={product} />)}
    </div>
  );
}

export default CheckoutList;
