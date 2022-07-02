import { useRouter } from 'next/router'
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  EmailAuthProvider,
  PhoneAuthProvider,
  AnonymousAuthProvider
} from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { firebaseAuth } from '../firebaseApp'
import { useAuthContext } from '../contexts/auth'

import utilsStyle from '../css/utils.module.css'

import configData from '../config.json'
import Loading from '../components/loading'

export async function getStaticProps() {
  return {
    props: { hideLogin: true }
  }
}

export default function Login(pageProps) {
  const user = useAuthContext()
  const router = useRouter()
  const uiConfig = {
    signInOptions: [
      GoogleAuthProvider.PROVIDER_ID,
      // FacebookAuthProvider.PROVIDER_ID,
      // TwitterAuthProvider.PROVIDER_ID,
      GithubAuthProvider.PROVIDER_ID,
      EmailAuthProvider.PROVIDER_ID,
      // PhoneAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: "/account",
    tosUrl: configData.TERMS,
    privacyPolicyUrl: configData.PRIVACY
  }

  if (user) {
    router.push("/account")
  }

  let byeMsg = false
  if (router.query.comebacksoon == ":D") {
    byeMsg = true
  }

  return (
    <>
      {!user &&
        <Box sx={{ mt: '3rem' }}>
          {byeMsg &&
            <Typography variant="h4"
              className={utilsStyle.headerLogoAppBar}>
              Thank you, please come again!
            </Typography>}
          <StyledFirebaseAuth uiConfig={uiConfig}
            firebaseAuth={firebaseAuth} />
        </Box>
      }
    </>
  )
}
