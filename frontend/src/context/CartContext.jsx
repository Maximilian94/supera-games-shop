import React, { createContext, useContext, useState } from 'react';
import { node } from 'prop-types';

const cartTest = [
  {
    id: 312,
    name: 'Super Mario Odyssey',
    price: 197.88,
    score: 100,
    image: 'super-mario-odyssey.png',
  },
];

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(cartTest);

  const context = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={context}>
      { children }
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}

CartProvider.propTypes = {
  children: node,
}.isRequired;
