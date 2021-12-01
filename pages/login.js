import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  EmailAuthProvider,
  PhoneAuthProvider,
  AnonymousAuthProvider,
  signOut,
  signInWithPopup } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import BaseLayout from '../components/base'
import { firebaseApp, firebaseAuth } from '../firebaseApp'
import configData from '../config.json'


export default function Login() {
  const uiConfig = {
    signInOptions: [
      GoogleAuthProvider.PROVIDER_ID,
      FacebookAuthProvider.PROVIDER_ID,
      TwitterAuthProvider.PROVIDER_ID,
      GithubAuthProvider.PROVIDER_ID,
      EmailAuthProvider.PROVIDER_ID,
      PhoneAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: '#my_account',
    tosUrl: configData.TERMS,
    privacyPolicyUrl: configData.PRIVACY
  }

  return (
    <BaseLayout hideLogin>
      <Box sx={{ mt: '3rem' }}>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
      </Box>
    </BaseLayout>
  )
}
