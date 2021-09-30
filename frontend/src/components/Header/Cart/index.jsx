import React from 'react';

import cart from '../../../images/shopping-cart.png';

import './style.css';

function Cart() {
  return (
    <div className="header-cart-div">
      <button type="button">
        <p hidden>Cart</p>
        <img src={cart} alt="cart" />
      </button>
    </div>
  );
}

export default Cart;
