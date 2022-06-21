// This is where global vars is kept.
// https://nextjs.org/learn/basics/assets-metadata-css/global-styles

import { useRouter } from 'next/router'
import Image from 'next/image'
import global from '../css/global.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import '@fontsource/carter-one'
import { useAuthState } from 'react-firebase-hooks/auth'
import { firebaseApp, firebaseAuth } from '../firebaseApp'
import { UserContext, useUserContext } from '../contexts/user'
import { CssBaseline } from '@mui/material'

// Overrides default Material UI: https://mui.com/customization/default-theme
const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen',].join(',')
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
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={user}>
        <CssBaseline />
        <Component {...pageProps} />
      </UserContext.Provider>
    </ThemeProvider >
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
