import React from 'react';

import './style.css';

function Header() {

  const logo = () => {
    return <p>Imagem</p>
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
