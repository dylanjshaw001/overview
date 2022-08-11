import React, { Fragment, createRef } from 'react';
import zenscroll from 'zenscroll';
import Hero from '../Hero/Hero';
import Timeline from '../Timeline/Timeline';
import {Player} from '../Player/Player';
import Brands from '../Brands/Brands';
import Products from '../Products/Products';
import '../../SCSS/styles.scss';
import Musical from './Musical';


class Home extends Musical {

    brandsRef = createRef();
    productsRef = createRef();
    playerRef = createRef();
    topRef = createRef();
    
    state = this.state;
    props = this.props;


  scrollToBrands = ():void => {zenscroll.to(this.brandsRef.current as HTMLElement, 1000);}
  scrollToPlayer = ():void => {zenscroll.to(this.playerRef.current as HTMLElement, 1000);}
  scrollToTop = ():void => {zenscroll.to(this.topRef.current as HTMLElement, 1000);}

  render() {

    return (
      <Fragment>
        <Hero />
        <Timeline scroll={{brands: this.scrollToBrands, player: this.scrollToPlayer}}/>
        <Products ref={this.productsRef} />
        <Brands ref={this.brandsRef} />
        <Player
          tracks={this.state.tracks}
          tracksLoaded={this.state.tracksLoaded}
          isDark={this.props.darkTheme}
          refAccess={this.playerRef}
        />
      </Fragment>
    );
  }
}

export default Home;