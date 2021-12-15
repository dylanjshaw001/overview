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


interface AppProps {}
interface AppState {
  darkTheme: boolean,
  workMode: boolean
}

class App extends Component<AppProps,AppState>{

  constructor(props:AppProps) {
    super(props);

    const now = new Date().getHours();
    const isNight = now <= 9 || now >= 18; 

    this.state = {
      darkTheme: isNight,
      workMode: true,
    }
  }


  private toggleDark = ():void => {
    let { darkTheme } = this.state;
    this.setState({
      darkTheme: !darkTheme
    });
  }

  private toggleWork = ():void => {
    let { workMode } = this.state;
    this.setState({
      workMode: !workMode
    });
  }

  render() {
    return (
      <Theme {...this.state}>
          <ScrollToTop/>
          <Nav click={{ theme: this.toggleDark, work: this.toggleWork }}/>
          <Routes>
            <Route path="/" element={
              <Home darkTheme={this.state.darkTheme}/>
            }/>
            <Route path="/melophile" element={
              <Melophile darkTheme={this.state.darkTheme}/>
            }/>
          </Routes>
        <Footer />
      </Theme>
    );
  }
}

export default withClass(App, '');
// export default App;