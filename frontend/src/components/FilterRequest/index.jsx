import React from 'react';

import './style.css';

function FilterRequest() {
  const priceRange = () => (
    <div className="price-range">
      <p>Preço:</p>
      <input type="text" placeholder="min" />
      <p>-</p>
      <input type="text" placeholder="max" />
    </div>
  );
  return (
    <div>
      {priceRange()}
    </div>
  );
}

export default FilterRequest;
