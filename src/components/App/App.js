/* eslint-disable no-self-assign */
import React, { Component } from 'react';
import fire from '../../fire';

import zenscroll from 'zenscroll';

import Nav from '../Nav/Nav';
import Profile from '../Hero/Profile';
import Timeline from '../Timeline/Timeline';
import TrackPlayer from '../Player/Player';
import Brands from '../Brands/Brands';
import Footer from '../Footer/Footer';

import { withClass } from '../shared/hoc/withClass';
import Theme from '../shared/Theme/ThemeProvider';
import '../../SCSS/styles.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      darkTheme: false,
      workMode: true,
      tracks: [],
      tracksLoaded: false
    }

    this.brandsRef = React.createRef();
    this.playerRef = React.createRef();
  }

  componentDidMount() {
    var component = this;
    fire.database().ref('music')
      .on('value', function (snapshot) {
        const tracks = snapshot.val();
        component.setState({ tracks: tracks, tracksLoaded: true });
      });
  }

  scrollToBrands = () => {
    zenscroll.to(this.brandsRef.current, 2000);
  }
  scrollToPlayer = () => {
    zenscroll.to(this.playerRef.current, 1000);
  }

  toggleDark = () => {
    let { darkTheme } = this.state;
    this.setState({
      darkTheme: !darkTheme
    });
  }

  toggleWork = () => {
    let { workMode } = this.state;
    this.setState({
      workMode: !workMode
    });
  }

  render() {

    return (
      <Theme darkTheme={this.state.darkTheme} workMode={this.state.workMode}>
        <Nav click={{ theme: this.toggleDark, work: this.toggleWork }} />
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
              isDark={this.state.darkTheme}
              ref={this.playerRef}
            />
          )
        }
        <Brands ref={this.brandsRef} />
        <Footer />
      </Theme>
    );
  }
}

export default withClass(App, '');