import { useEffect } from 'react'
import useRouter from 'next/router'
import Box from '@mui/material/Box'
import {
  GoogleAuthProvider,
  getAuth,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword } from "firebase/auth"
import firebaseAuth from "../../../firebase"

// import { login, loggingWithEmail, logout } from '../../../context/AuthUserContext.js'
// import SomePrint from '../../../context/AuthUserContext.js'


export default function LoggedIn() {
  const loggingWithEmail = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password).then(cred => {
      const token = cred.accessToken
      const user = cred.user
      console.log("GOOGEL AUTH PROVIDER")
      console.log({cred, token, user})
    }).catch(e => {
      const errorMessage = "Error with Google Authentication " + e.code + " " + e.message + " with email " + e.email + " " + GoogleAuthProvider.credentialFromError(e)
      console.error(errorMessage)
    })
  }

  const logout = () => {
    signOut(firebaseAuth)
    console.log("LOGOUT SUCCESSFUL")
  }

  return (
    <Box>
      <input type="text" id="user"></input>
      <input type="text" id="pass"></input>
      <button onClick={loggingWithEmail("", "")}>LOG IN</button>
      <button onClick={logout()}>LOG OUT</button>
    </Box>
  )
}
