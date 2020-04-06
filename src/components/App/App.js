/* eslint-disable no-self-assign */
import React, { Component } from 'react';

import Nav from '../Nav/Nav';
import Profile from '../Hero/Profile';
import Timeline from '../Timeline/Timeline';
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

    }

    this.brandsRef = React.createRef();

  }

  scrollToBrands = () => {
    this.brandsRef.current.focus();
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
        <Timeline scroll={this.scrollToBrands} />
        <Brands ref={this.brandsRef} />
        <Footer />
      </Theme>
    );
  }
}

export default withClass(App, '');