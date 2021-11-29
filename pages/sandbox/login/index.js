import { useEffect } from 'react'
import useRouter from 'next/router'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  getAuth,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword } from 'firebase/auth'
import firebaseAuth from '../../../firebase'


export default function Home() {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("User is signed in")
      console.log(uid)

    } else {
      console.log("User is signed out")
    }
  })

  return (
    <Box>
      <button>LOG IN</button>
    </Box>
  )
}
