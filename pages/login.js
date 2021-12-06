import { useRouter } from 'next/router'
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  EmailAuthProvider,
  PhoneAuthProvider,
  AnonymousAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { firebaseAuth } from '../firebaseApp'
import { useUserContext } from '../contexts/user'
import configData from '../config.json'
import BaseLayout from '../components/base'


export default function Login() {
  const user = useUserContext()
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
      <BaseLayout hideLogin>
        <Box sx={{ mt: '3rem' }}>
          {byeMsg && <Typography variant="h4">Thank you, please come again!</Typography>}
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
          </Box>
      </BaseLayout>
    }
    </>
  )
}
