import { useContext } from 'react';

import ThemeContext from './theme-context';

export const useDark = (target) => {
  let darkTheme = useContext(ThemeContext).darkTheme;
  return (
    target ?
      (darkTheme ? `theme-${target}--dark` : `theme-${target}--light`) :
      darkTheme
  );
}

export const useWork = (props) => useContext(ThemeContext).workMode;
