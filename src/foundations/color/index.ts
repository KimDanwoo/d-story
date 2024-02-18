import colors from 'tailwindcss/colors';

export const themeColors = {
  transparent: 'transparent',
  current: 'currentColor',
  white: colors.white,
  black: colors.black,
  mintgreen: {
    50: '#F3FBF8',
    100: '#D2EFE4',
    200: '#AFE4CF',
    300: '#74D8B1',
    400: '#38C78F',
    500: '#1DB177',
    600: '#189966',
    700: '#147C53',
    800: '#106543',
    900: '#0A402A',
  },
  bluegray: {
    50: '#F8FAFD',
    100: '#ECF0F7',
    200: '#CED5E0',
    300: '#A9B5C6',
    400: '#8491A4',
    500: '#6A7685',
    600: '#535C68',
    700: '#3D444D',
    800: '#262B30',
    900: '#101214',
  },
  gray: {
    50: '#F4F4F5',
    100: '#E7E7E9',
    200: '#DADADC',
    300: '#CACACD',
    400: '#A6A6AB',
    500: '#898990',
    600: '#707075',
    700: '#555558',
    800: '#323234',
    900: '#0C0C0D',
  },
  red: {
    50: '#FEF2F2',
    100: '#FDDEDE',
    200: '#FCC5C5',
    300: '#F99F9F',
    400: '#F77878',
    500: '#F55858',
    600: '#E83030',
    700: '#CF1717',
    800: '#A80A0A',
    900: '#780707',
  },
  indigo: {
    50: '#F0F2FB',
    100: '#D8DDF3',
    200: '#B0BAE8',
    300: '#8998DC',
    400: '#6579D2',
    500: '#4D65CB',
    600: '#3750BE',
    700: '#2E439E',
    800: '#233276',
    900: '#17214F',
  },
};

export const colorTheme = {
  brand: {
    primary: themeColors.mintgreen[500],
    secondary: themeColors.bluegray[600],
  },
  basic: {
    'surface-1': themeColors.white,
    'surface-2': themeColors.gray[100],
    'surface-3': themeColors.gray[800],
    'surface-4': themeColors.bluegray[50],
    'surface-dim-thick': 'rgba(0, 0, 0, 0.75)',
    'surface-dim-basic': 'rgba(0, 0, 0, 0.25)',
    'surface-dim-thin': 'rgba(0, 0, 0, 0.15)',
    'on-surface-1': themeColors.gray[800],
    'on-surface-2': themeColors.gray[700],
    'on-surface-3': themeColors.gray[500],
    'on-surface-4': themeColors.gray[400],
    'on-surface-5': themeColors.gray[300],
    'on-surface-6': themeColors.white,
    'border-1': themeColors.gray[50],
    'border-2': themeColors.gray[100],
    'border-3': themeColors.gray[200],
    'border-4': themeColors.gray[300],
  },
  state: {
    error: themeColors.red[600],
    'error-container': themeColors.red[50],
    info: themeColors.indigo[600],
    'info-container': themeColors.indigo[50],
    success: themeColors.mintgreen[500],
    'success-container': themeColors.mintgreen[50],
  },
  accent: {
    mintgreen: themeColors.mintgreen[500],
    'mintgreen-container': themeColors.mintgreen[50],
    bluegray: themeColors.bluegray[600],
    'bluegray-container': themeColors.bluegray[50],
    red: themeColors.red[600],
    'red-container': themeColors.red[50],
    indigo: themeColors.indigo[600],
    'indigo-container': themeColors.indigo[50],
  },
};
