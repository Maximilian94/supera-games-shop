import React from 'react';

import './style.css';

import Search from './Search';

import Logo from '../../images/SUPERA-BRANCO.svg';

function Header() {

  const logo = () => (<img src={Logo} alt="logo" className="logo" />)

  const cart = () => {
    return <p>Carrinho</p>
  }

  return (
    <header>
      {logo()}
      <Search />
      {cart()}
    </header>
  );
}

export default Header;
