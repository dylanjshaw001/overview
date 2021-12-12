/* eslint-disable no-self-assign */
import React, { Component } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";


import Theme from '../shared/Theme/ThemeProvider';
import { withClass } from '../shared/hoc/withClass';
import ScrollToTop from '../shared/utility/scrollToTop';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import Home from '../Pages/Home';
import Melophile from '../Pages/Melophile';

class App extends Component {

  constructor() {
    super();

    const now = new Date().getHours();
    const isNight = now <= 9 || now >= 18; 

    this.state = {
      darkTheme: isNight,
      workMode: true,
    }
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
          <ScrollToTop/>
          <Nav click={{ theme: this.toggleDark, work: this.toggleWork }}/>
          <Routes>
            <Route exact path="/" element={
              <Home darkTheme={this.state.darkTheme}/>
            }/>
            <Route exact path="/melophile" element={
              <Melophile
                darkTheme={this.state.darkTheme}
              />
            }/>
          </Routes>
        <Footer />
      </Theme>
    );
  }
}

export default withClass(App, '');
// export default App;