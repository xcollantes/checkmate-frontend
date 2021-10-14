// This is where global vars is kept.
// https://nextjs.org/learn/basics/assets-metadata-css/global-styles

import React from 'react';
import global from '../css/global.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


// Overrides default Material UI: https://mui.com/customization/default-theme
const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#001e3c"
  //   },
  //   secondary: {
  //     main: "#ffa500"
  //   }
  // }
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
