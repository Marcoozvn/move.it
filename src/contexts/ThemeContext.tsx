import { createContext, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface IThemeContext {
  theme: DefaultTheme;
  toogleTheme(): void;
}

export const CustomThemeContext = createContext({} as IThemeContext);

export const CustomThemeProvider: React.FC = (props) => {
  const [theme, setTheme] = useState(light);

  const toogleTheme = () => setTheme(theme.title === 'light' ? dark : light);

  return (
    <CustomThemeContext.Provider
      value={{
        theme, 
        toogleTheme
      }}>
        <ThemeProvider theme={theme}>
          {props.children}

        </ThemeProvider>
    </CustomThemeContext.Provider>
  )
}

export function useTheme(): IThemeContext {
  const context = useContext(CustomThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }

  return context;
}