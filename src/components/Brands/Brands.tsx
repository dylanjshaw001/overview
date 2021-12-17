import React, { useState, useEffect } from 'react';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { CSSTransition } from 'react-transition-group';

import { FadeIn } from '../shared/hoc/FadeIn';
import { useDark } from '../shared/Theme/UseTheme';

import fire from '../../fire';


type BrandsProps = {}

export default React.forwardRef((_, brandsRef: any) => {

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
      <CSSTransition
        in={true}
        timeout={1000}
        appear
        classNames='fade-slow'
      >
        <div className='centered-column brands-caption'>
          <div><span>some sites i've worked on</span></div>
          <div className='centered-column brands-caption__arrow'><KeyboardArrowUpIcon /></div>
        </div>
      </CSSTransition>
      <div className='brands'>
        {
          brandsState.brandsLoaded ?
            brandsState.brands.map(({href, flex, backgroundSrc, title}, ind) => {
              return (
                <FadeIn key={ind} swipe={true}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='brands__tile'
                  >
                    <div className={`${flex} brands__tile-content`} style={{ backgroundImage: `url(${backgroundSrc})` }}>
                      <p className="brands__tile-title">{title}</p>
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
})