import React from 'react';
import ThemeContext from './theme-context';

interface ThemeProps {
  darkTheme: boolean,
  workMode: boolean,
  children: JSX.Element[]
}

const Theme = ({darkTheme, workMode, children}: ThemeProps):JSX.Element => {
  return <ThemeContext.Provider value={{darkTheme, workMode}}>{children}</ThemeContext.Provider>
}

export default Theme;