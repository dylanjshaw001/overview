import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';

import zenscroll from 'zenscroll';

import { FadeIn } from '../shared/hoc/FadeIn';
import { useDark } from '../shared/Theme/UseTheme';

import fire from '../../fire';


function Brands(props, ref) {

  const brandsRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => zenscroll.to(brandsRef.current, 1000)
  }));

  const [brandsState, setBrandsState] = useState({ brands: [], brandsLoaded: false });

  const fetchBrands = () => {
    fire.database().ref('brands')
      .on('value', function (snapshot) {
        const brands = snapshot.val();
        setBrandsState({ brands: brands, brandsLoaded: true });
      });
  }

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <div ref={brandsRef} className={`${useDark('brands-container')} brands-container`}>
      <div className='brands'>
        {
          brandsState.brandsLoaded ?
            brandsState.brands.map((brand, ind) => {
              return (
                <FadeIn key={ind} swipe={true}>
                  <a
                    href={brand.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='brands__tile'
                  >
                    <div className={`${brand.flex} brands__tile-content`} style={{ backgroundImage: `url(${brand.backgroundSrc})` }}>
                      <p className="brands__tile-title">{brand.title}</p>
                    </div>
                  </a>
                </FadeIn>
              );
            }) :
            null
        }
      </div>
    </div>
  );
}

export default React.forwardRef(Brands);