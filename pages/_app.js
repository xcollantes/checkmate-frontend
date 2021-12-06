// This is where global vars is kept.
// https://nextjs.org/learn/basics/assets-metadata-css/global-styles

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import global from '../css/global.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useAuthState } from 'react-firebase-hooks/auth'
import { firebaseApp, firebaseAuth } from '../firebaseApp'
import { UserContext, useUserContext } from '../contexts/user'


// Overrides default Material UI: https://mui.com/customization/default-theme
const theme = createTheme({})

export default function App({ Component, pageProps }) {
  // const [currentUser, setCurrentUser] = useState()
  const route = useRouter()
  const [user, loading, error] = useAuthState(firebaseAuth)

  // Specify `?debug_info=true` for info at bottom of page
  let urlParamDebug = route.query.deb
  let debugInfo = true ? urlParamDebug === "true" : false

  if (pageProps.protected && loading) {
    return <Image width="400%" height="400%" src="/../public/images/bongo-cat.gif" />
  } else if (pageProps.protected && !user) {
    route.push("/login")
  }

  return (
    <UserContext.Provider value={user}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
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
