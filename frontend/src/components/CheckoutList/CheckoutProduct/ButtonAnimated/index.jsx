import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';

function ButtonTrash(props) {
  const { staticImage, animatedImage, name } = props;
  const [image, setImage] = useState(staticImage);

  return (
    <button
      type="button"
      className="animated-button"
      onMouseEnter={() => { setImage(animatedImage); }}
      onMouseLeave={() => { setImage(staticImage); }}
    >
      <img src={image} alt={name} />
    </button>
  );
}

ButtonTrash.propTypes = {
  staticImage: PropTypes.string.isRequired,
  animatedImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ButtonTrash;
