import React, { useState, useEffect } from 'react';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { FadeIn } from '../shared/utility/Transitions';
import { useDark } from '../shared/Theme/UseTheme';

import fire from '../../fire';

export default React.forwardRef((_, productsRef: any) => {

  const [productsState, setProductsState] = useState({ products: [], productsLoaded: false });

  const fetchProducts = () => {
    fire.database().ref('products')
      .on('value', function (snapshot) {
        const products = snapshot.val();
        setProductsState({ products: products, productsLoaded: true });
      });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div ref={productsRef} className={`${useDark('products-container')} products-container`}>
      <div className='centered-column products-caption'>
        <div><span>softwares i've worked on</span></div>
        <div className='centered-column products-caption__arrow'><KeyboardArrowUpIcon /></div>
      </div>
      <div className='products'>
          {
            productsState.products.map(({cover, href, title}, ind) => {
              return (
                <FadeIn loaded={productsState.productsLoaded} key={ind}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className='products__tile'>
                      <div className={`products__tile-content`} style={{ backgroundImage: `url(${cover})` }}>
                      </div>
                    </a>
                </FadeIn>
              );
            })
          }
      </div>
    </div>
  );
})