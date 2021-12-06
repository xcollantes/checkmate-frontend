// This is where global vars is kept.
// https://nextjs.org/learn/basics/assets-metadata-css/global-styles

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import global from '../css/global.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import { useAuthState } from 'react-firebase-hooks/auth'
import { firebaseApp, firebaseAuth } from '../firebaseApp'
import { UserContext, useUserContext } from '../components/user'


// Overrides default Material UI: https://mui.com/customization/default-theme
const theme = createTheme({});

export default function App({ Component, pageProps }) {
  // const [currentUser, setCurrentUser] = useState()
  const route = useRouter()
  const [user, loading, error] = useAuthState(firebaseAuth)


  // Specify `?debug_info=true` for info at bottom of page
  let urlParamDebug = route.query.deb
  let debugInfo = true ? urlParamDebug === "true" : false

  // useEffect(() => {
  //   setCurrentUser(user)
  // }, [])

  if (pageProps.protected && !user) {
    return (
      <iframe width="100%" height="500" src="https://www.youtube.com/embed/RfiQYRn7fBg?controls=0&amp;start=13" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen></iframe>
    )
  }

  if (pageProps.protected && loading) {
    return <>THIS IS PROTECTED PAGE LOADING</>
  }

  return (
    <UserContext.Provider value={user}>
      <ThemeProvider theme={theme}>

        <Component {...pageProps} />

        {(user && debugInfo) &&
          <div>
            <h3>DEBUG INFO</h3>
            <p>USER: {user.displayName}</p>
          </div>
        }

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
