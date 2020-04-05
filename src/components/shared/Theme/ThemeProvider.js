import React from 'react';
import ThemeContext from './theme-context';

const Theme = (props) => {
  return (
    <ThemeContext.Provider
      value={{
        darkTheme: props.darkTheme,
        workMode: props.workMode
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default Theme;