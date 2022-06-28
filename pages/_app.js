// Custom _app.js acts as wrapper for every page in web app.
//
// Files in pages directory rendered in the `<Component {...pageProps} />` 
// component. 
// 
// Styles are defined here for application to all pages.  Since the web app 
// uses Material UI (which uses Emotion library), 
// createCache allows for low level customization of how styles get 
// inserted by emotion. It’s intended to be used with the <CacheProvider/> 
// component to override the default cache, which is created with sensible 
// defaults for most applications.
// A CacheProvider must be used along with a custom `_document.js` page. 
// https://nextjs.org/learn/basics/assets-metadata-css/global-styles
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Container } from '@mui/material'

import { CacheProvider } from '@emotion/react'
import '@fontsource/carter-one'
import '@fontsource/roboto'
import '../css/global.css'
import theme from '../src/theme'
import createEmotionCache from '../src/createEmotionCache'

import TopAppBar from '../components/appbar'
import BottomBar from '../components/bottomBar'

import { useAuthState } from 'react-firebase-hooks/auth'
import { firebaseApp, firebaseAuth } from '../firebaseApp'
import { UserContext, useUserContext } from '../contexts/user'

import configData from '../config.json'

const clientEmotionCache = createEmotionCache()

export default function MyApp(props) {
  const { Component, emotionCache = clientEmotionCache, pageProps } = props

  // const [currentUser, setCurrentUser] = useState()
  const route = useRouter()
  const [user, loading, error] = useAuthState(firebaseAuth)

  if (pageProps.protected && loading) {
    return <Image width="400%" height="400%" src="/../public/images/bongo-cat.gif" />
  } else if (pageProps.protected && !user) {
    route.push("/login")
  }

  return (
    <>
      <CacheProvider value={emotionCache}>
        <UserContext.Provider value={user}>

          <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="description"
              content="{configData.METADATA.WEBSITE_DESCRIPTION}"
            />
            <meta
              property="og:image"
              content={`https://og-image.vercel.app/${encodeURI(
                configData.METADATA.WEBSITE_NAME
              )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="keywords" content={configData.METADATA.WEBSITE_TAGS} />
            <meta name="og:title" content={configData.METADATA.WEBSITE_NAME} />
            <meta name="twitter:card" content="summary_large_image" />
            <title>{configData.METADATA.WEBSITE_NAME}</title>
          </Head>

          <ThemeProvider theme={theme}>

            <CssBaseline />

            <TopAppBar hideLogo={pageProps.hideLogo}
              hideLogin={pageProps.hideLogin}></TopAppBar>

            <Container>
              <Component {...pageProps} />
            </Container>

            <BottomBar></BottomBar>

          </ThemeProvider>
        </UserContext.Provider>
      </CacheProvider>
    </>
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
