// This is where global CSS is kept.
// https://nextjs.org/learn/basics/assets-metadata-css/global-styles

import React from 'react';
import global from '../css/global.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#001e3c"
    },
    secondary: {
      main: "#ffa500"
    }
  }
});

export default function App({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    <ThemeProvider theme={theme}></ThemeProvider>
    </>
  )
}
