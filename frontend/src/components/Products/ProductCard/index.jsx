import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

import ScoreStars from '../../ScoreStarts';

function ProductCard(props) {
  const {
    productData: {
      name, image, price, score, id,
    },
  } = props;

  return (
    <Link className="product-card" to={`/product/${id}`}>
      <img src={`/images/Products/${image}`} alt={name} />
      <p>{name}</p>
      <p>{`R$: ${price}`}</p>
      <ScoreStars score={score} />
    </Link>
  );
}

ProductCard.propTypes = {
  productData: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    score: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
