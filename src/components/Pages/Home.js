import React, { Fragment, createRef } from 'react';
import zenscroll from 'zenscroll';
import Profile from '../Hero/Profile';
import Timeline from '../Timeline/Timeline';
import TrackPlayer from '../Player/Player';
import Brands from '../Brands/Brands';
import '../../SCSS/styles.scss';
import Musical from './Musical';

class Home extends Musical {
  constructor(props) {
    super(props);

    this.brandsRef = createRef();
    this.playerRef = createRef();
    this.topRef = createRef();
  }

  scrollToBrands = () => {
    zenscroll.to(this.brandsRef.current, 1000);
  }
  scrollToPlayer = () => {
    zenscroll.to(this.playerRef.current, 1000);
  }
  scrollToTop = () => {
    zenscroll.to(this.topRef.current, 1000);
  }

  render() {

    return (
      <Fragment>
        <Profile />
        <Timeline
          scroll={{
            brands: this.scrollToBrands,
            player: this.scrollToPlayer
          }}
        />
        {
          this.state.tracksLoaded && (
            <TrackPlayer
              tracks={this.state.tracks}
              tracksLoaded={this.state.tracksLoaded}
              isDark={this.props.darkTheme}
              ref={this.playerRef}
            />
          )
        }
        <Brands ref={this.brandsRef} />
      </Fragment>
    );
  }
}

export default Home;