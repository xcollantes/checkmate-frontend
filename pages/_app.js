// This is where global vars is kept.
// https://nextjs.org/learn/basics/assets-metadata-css/global-styles

import { useRouter } from 'next/router'
import Image from 'next/image'
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import '@fontsource/carter-one'
import '@fontsource/roboto'
import { useAuthState } from 'react-firebase-hooks/auth'
import { firebaseApp, firebaseAuth } from '../firebaseApp'
import { UserContext, useUserContext } from '../contexts/user'

import Head from 'next/head'
import TopAppBar from '../components/appbar'
import BottomBar from '../components/bottomBar'
import configData from '../config.json'

// Overrides default Material UI: https://mui.com/customization/default-theme
const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system', 'BlinkMacSystemFont', '"Open Sans"', 'Roboto', 'Oxygen',].join(',')
  }
})

export default function App({ Component, pageProps }) {
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
      {/* <ThemeProvider theme={theme}> */}
      <UserContext.Provider value={user}>

        <TopAppBar hideLogo={pageProps.hideLogo}
          hideLogin={pageProps.hideLogin}></TopAppBar>

        <Component {...pageProps} />

        <BottomBar></BottomBar>

      </UserContext.Provider>
      {/* </ThemeProvider> */}
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
