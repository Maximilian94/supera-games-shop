import React from 'react';

import './style.css';

import Search from './Search';
import Cart from './Cart';

import Logo from '../../images/SUPERA-BRANCO.svg';

function Header() {
  const logo = () => (<img src={Logo} alt="logo" className="logo" />);

  return (
    <header>
      {logo()}
      <Search />
      <Cart />
    </header>
  );
}

export default Header;
