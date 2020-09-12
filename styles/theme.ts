import { theme, DefaultTheme } from '@chakra-ui/core';

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Poppins, system-ui, sans-serif',
    heading: 'Poppins, system-ui, sans-serif',
    mono: 'Menlo',
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },

  colors: {
    ...theme.colors,
    red: {
      ...theme.colors.red,
      500: '#ef484a',
      800: '#d03234',
    },
    gray: {
      ...theme.colors.gray,
      300: '#e1e1e6',
      700: '#191818 ',
      800: '#222',
    },
    green: {
      ...theme.colors.green,
      500: '#1abf40',
    },
  },
};

export default customTheme;
