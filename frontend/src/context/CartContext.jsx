import React, { createContext, useContext, useState } from 'react';
import { node } from 'prop-types';

import { useProducts } from './ProductContext';

// const cartTest = [
//   {
//     id: 312,
//     name: 'Super Mario Odyssey',
//     price: 197.88,
//     score: 100,
//     image: 'super-mario-odyssey.png',
//   },
// ];

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { products } = useProducts();

  const updateCart = (id, quantity) => {
    console.log(cart);
    if (!quantity) { return console.log('Quantity zero, not added'); }
    const newCart = [...cart];
    const productFound = newCart.find((product) => product.id === id);
    if (!productFound) { newCart.push({ id, quantity }); }
    if (productFound) { productFound.quantity = quantity; }
    console.log(newCart);
    return setCart(newCart);
  };

  const removeProduct = (id) => {
    let newCart = [...cart];
    newCart = newCart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((acc, cartItem) => {
      const productData = products.find((product) => product.id === cartItem.id);
      return acc + (productData.price * cartItem.quantity);
    }, 0);
    return totalPrice;
  };

  const totalPrice = getTotalPrice();

  const context = {
    cart,
    totalPrice,
    setCart,
    updateCart,
    removeProduct,
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
