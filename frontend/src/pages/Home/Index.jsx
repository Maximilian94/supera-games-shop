import React from 'react';

import Header from '../../components/Header';
import Products from '../../components/Products';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Products />
      </main>
    </div>
  );
}

export default Home;
