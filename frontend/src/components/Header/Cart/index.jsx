import React from 'react';

import cart from '../../../images/shopping-cart.png'

import './style.css';

function Cart() {
  return (
    <div className="header-cart-div">
      <img src={cart} />
    </div>
  );
}

export default Cart;