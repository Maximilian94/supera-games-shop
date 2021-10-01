import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function ButtonAddRemove(props) {
  const { quantity } = props;
  return (
    <div className="div-add-remove-product">
      <button type="button">-</button>
      <p>{quantity}</p>
      <button type="button">+</button>
    </div>
  );
}

ButtonAddRemove.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default ButtonAddRemove;
