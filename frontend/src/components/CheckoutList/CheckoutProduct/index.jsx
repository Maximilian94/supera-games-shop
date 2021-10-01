import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import ButtonAnimated from './ButtonAnimated';
import ButtonAddRemove from './ButtonAddRemove';

import trash from '../../../images/trash.png';
import trashAnimated from '../../../images/icons8-trash-can.gif';

import heart from '../../../images/heart.png';
import heartAnimated from '../../../images/heart-animated.gif';

import { useCart } from '../../../context/CartContext';

function CheckoutProduct(props) {
  const {
    product: {
      name, price, image, id,
    },
    quantity,
  } = props;

  const { removeProduct } = useCart();

  return (
    <div className="checkout-product">
      <div>
        <img src={`/images/Products/${image}`} alt={name} />
      </div>
      <div>
        <p>{name}</p>
        <p>{`R$: ${price}`}</p>
        <p>Envio: R$ 85,00</p>
      </div>
      <div>
        <div className="favorite-trash">
          <ButtonAnimated staticImage={heart} animatedImage={heartAnimated} name="favorite" />
          <ButtonAnimated
            staticImage={trash}
            animatedImage={trashAnimated}
            name="trash"
            onClick={() => removeProduct(id)}
          />
        </div>
        <ButtonAddRemove quantity={quantity} id={id} />
      </div>
    </div>
  );
}

CheckoutProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CheckoutProduct;
