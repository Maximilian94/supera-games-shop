import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function ProductCard(props) {
  const {
    productData: {
      name, image, price, score,
    },
  } = props;

  return (
    <div className="product-card">
      <img src={`/images/Products/${image}`} alt={name} />
      <p>{name}</p>
      <p>{`R$: ${price}`}</p>
      <p>{score}</p>
    </div>
  );
}

ProductCard.propTypes = {
  productData: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    score: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
