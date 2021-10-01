import React from 'react';
import './style.css';

function PurchaseSummary() {
  return (
    <div className="purchase-summary">
      <h2>Resumo do pedido</h2>
      <div className="line">
        <p>Subtotal</p>
        <p>R$ 0,00</p>
      </div>
      <div className="line">
        <p>Envio</p>
        <p>R$ 0,00</p>
      </div>
      <div className="line">
        <p>Total</p>
        <p>R$ 0,00</p>
      </div>
      <button type="button">
        Comprar
      </button>
    </div>
  );
}

export default PurchaseSummary;
