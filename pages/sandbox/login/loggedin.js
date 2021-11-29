import useRouter from 'next/router'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  EmailAuthProvider,
  PhoneAuthProvider,
  onAuthStateChanged,
  AnonymousAuthProvider,
  getAuth,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { firebaseApp } from '../../../firebaseApp'


export default function LoggedIn() {
  let uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [
      GoogleAuthProvider.PROVIDER_ID,
      FacebookAuthProvider.PROVIDER_ID,
      TwitterAuthProvider.PROVIDER_ID,
      GithubAuthProvider.PROVIDER_ID,
      EmailAuthProvider.PROVIDER_ID,
      PhoneAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url/callback.
    tosUrl: '/',
    // Privacy policy url/callback.
    privacyPolicyUrl: '/'
  }

  // Initialize the FirebaseUI Widget using Firebase.
  // let ui = new firebaseuiNoSSR.auth.AuthUI(firebase.auth())
  // The start method will wait until the DOM is loaded.
  // ui.start('#firebaseui-auth-container', uiConfig)

  return (
    <Box>
      <h1>Why won't my stupid web app work, wait it works</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth()} />
    </Box>
  )
}
