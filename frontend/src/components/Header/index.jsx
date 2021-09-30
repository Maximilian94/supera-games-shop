import React from 'react';

import './style.css';

import Logo from '../../images/SUPERA-BRANCO.svg';

function Header() {

  const logo = () => {
    return <img src={Logo} alt="logo" className="logo" />
  }

  const search = () => {
    return <p>Procurar</p>
  }

  const cart = () => {
    return <p>Carrinho</p>
  }

  return (
    <header>
      {logo()}
      {search()}
      {cart()}
    </header>
  );
}

export default Header;
