// This is where global vars is kept.
// https://nextjs.org/learn/basics/assets-metadata-css/global-styles

import { useState, useEffect } from 'react'
import global from '../css/global.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import { useAuthState } from 'react-firebase-hooks/auth'
import { firebaseApp, firebaseAuth } from '../firebaseApp'
import { UserContext } from '../components/user'


// Overrides default Material UI: https://mui.com/customization/default-theme
const theme = createTheme({});

export default function App({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(firebaseAuth)

  return (

    <UserContext.Provider value={user}>
      <ThemeProvider theme={theme}>

        <Component {...pageProps} />

        <h3>DEBUG INFO</h3>
        {user && <p>USER: {user.displayName}</p>}

      </ThemeProvider>
    </UserContext.Provider>

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
